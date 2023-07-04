import { OAuth2Client } from 'google-auth-library'
import jwt from 'jsonwebtoken'
import { CustomError } from '../middleware/errorHandler.js'

const googleClient = new OAuth2Client(process.env["GOOGLE_ID"])
const GOOGLE_ID = process.env["GOOGLE_ID"]

// se verifica daca token ul este de la google
// daca este inregula atunci vor fi returnate datele utilizatorului

async function googleVerification(token) {
    let ticket
    try {
        ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: GOOGLE_ID
        })
    } catch (err) {
        console.log(err)
        throw new CustomError(500, "Google validation issue")
    }

    return (await ticket.getPayload())
    // userData = await ticket.getPayload()
    // console.log(ticket)
}

export { googleVerification }