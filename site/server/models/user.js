import mongoose from 'mongoose'
import { googleVerification } from '../tools/googleVerification.js'
import { CustomError } from '../middleware/errorHandler.js'
import generateJWTPair from '../tools/generateJwt.js'

const userSchema = new mongoose.Schema(
    {
        picture: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
        },
        submittedCount: {
            type: Number,
            default: 0
        },
        refreshWindow: {
            type: Date,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
    },
    {
        statics: {
            async logIn(token) {
                const userDataGoogle = await googleVerification(token)
                const { email, name, picture } = userDataGoogle

                if (!email.includes("@cnaic.com")) {
                    throw new CustomError(401, 'Not authorized')
                }

                // se verifica daca userul este inregistrat in baza de date
                // daca este atunci acesta v a fi logat
                const isUser = await this.findOne({ email })
                if (isUser) {
                    // se v a genera perechea de JWT uri iar refresh tokenul v a fi actualizat in baza de date
                    const { accessToken, refreshToken } = generateJWTPair(isUser)
                    isUser.refreshToken = refreshToken
                    await isUser.save()
                    return { accessToken, refreshToken }
                }

                // daca este un utilizator nou atunci v a fi creat un cont
                // pe baza datelor de la google
                const newUser = new this({
                    name: name,
                    email: email,
                    picture: picture,
                })
                // v a fi setat refresh window ul la o saptamana
                newUser.refreshWindow = Date.now() + 604800000
                const { refreshToken, accessToken } = generateJWTPair(newUser)
                newUser.refreshToken = refreshToken
                await newUser.save()
                return { accessToken, refreshToken }
            }
        },
    },

)

const User = mongoose.model("Users", userSchema)

export default User