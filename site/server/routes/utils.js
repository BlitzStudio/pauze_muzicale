import { Router } from 'express'
import jwt from 'jsonwebtoken'
import { AsyncHandler, CustomError, errorHandler } from '../middleware/errorHandler.js'
import User from '../models/user.js'
import Music from '../models/musicTrack.js'
import generateJwtPair from '../tools/generateJwt.js'
const router = Router()

const ACCESS_SECRET = process.env["JWT_ACCESS_SECRET"]
const REFRESH_SECRET = process.env["JWT_REFRESH_SECRET"]

const isAuth = function (req, res, next) {

    const authorization = req.headers.authorization
    if (!authorization) {
        return res.sendStatus(401)
    }
    const token = authorization.split(" ")[1]
    jwt.verify(token, ACCESS_SECRET, (err, decoded) => {
        console.log(err)
        if (err) {
            return res.sendStatus(403)
        }
        req.user = decoded
        next()
    })
}


router.post("/songs", isAuth, AsyncHandler(async (req, res) => {
    const { ids } = req.body
    // console.log(req.headers.authorization.split(" ")[1])
    ids.forEach(async id => {
        const db = await Music.findById(id)
        if (!db) {
            const track = new Music({
                _id: id,
            })
            await track.save()
        }
    });
    const user = await User.findById(req.user.azp)
    const now = new Date()
    const refreshWindow = new Date(user.refreshWindow)
    console.log(!user.submittedCount || (user.submittedCount == 3 && refreshWindow < now));
    if (!user.submittedCount || (user.submittedCount == 3 && refreshWindow < now)) {
        now.setHours(0)
        now.setMinutes(0)
        now.setSeconds(0)
        now.setMilliseconds(0)
        user.refreshWindow = now.getTime() + 7 * 24 * 60 * 60 * 1000
        user.submittedCount = ids.length
    } else {
        user.submittedCount += ids.length
    }
    const { accessToken, refreshToken } = generateJwtPair(user)
    user.refreshToken = refreshToken
    await user.save()

    res.send(accessToken)
}))

export default router