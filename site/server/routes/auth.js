import { Router } from "express";
import { AsyncHandler, CustomError, errorHandler } from '../middleware/errorHandler.js'
import User from '../models/user.js'
const router = Router()

router.post("/login", AsyncHandler(async (req, res) => {
    const { credential } = req.body
    // daca in request nu este prezent fienldul pt google acesta v a fi anulat

    if (!credential) {
        throw new CustomError(401, "Not authorized")
    }
    const { refreshToken, accessToken } = await User.logIn(credential)
    res.cookie('rht', refreshToken, {
        // maxAge = one week
        maxAge: 604800000,
        httpOnly: true,
        sameSite: "none",
        // necesit ca req sa fie trimis prin https, exceptie fiind localHost
        secure: true
    })
    res.json(accessToken)
}))






export default router