import { Router } from "express";
import jwt from 'jsonwebtoken'
import { AsyncHandler, CustomError, errorHandler } from '../middleware/errorHandler.js'
import User from '../models/user.js'
import generateJwtPair from "../tools/generateJwt.js";
const router = Router()

const ACCESS_SECRET = process.env["JWT_ACCESS_SECRET"]
const REFRESH_SECRET = process.env["JWT_REFRESH_SECRET"]


router.post("/login", AsyncHandler(async (req, res) => {
    const { credential } = req.body
    // daca in request nu este prezent fienldul pt google acesta v a fi anulat

    if (!credential) {
        throw new CustomError(401, "Not authorized")
    }
    const { refreshToken, accessToken } = await User.logIn(credential)
    res.cookie("rht", refreshToken, {
        // maxAge = one week
        maxAge: 604800000,
        httpOnly: true,
        sameSite: "none",
        // necesit ca req sa fie trimis prin https, exceptie fiind localHost
        secure: true
    })
    res.json(accessToken)
}))

router.get("/logout", AsyncHandler(async (req, res) => {
    const cookie = req.cookies

    // daca nu exista cookie ul cu refresh token 
    if (!cookie.rht) {
        return res.status(204).send("No user")
    }
    // decodeaza refresh tokenul pt azp 
    const userData = jwt.decode(cookie.rht, REFRESH_SECRET)
    // couta utilizatorul ca id dupa azp
    const isUser = await User.findById(userData.azp)


    if (!isUser) {
        return res.status(204).send("No user")
    }
    // goleste cookiul
    res.clearCookie("rht", { httpOnly: true, sameSite: "none", secure: true })
    // sterge refresh tokenul
    isUser.refreshToken = "";
    await isUser.save()

    return res.sendStatus(200)
}))

router.get("/refresh", async (req, res) => {
    const cookie = req.cookies
    if (!cookie.rht) {
        return res.status(401).send("No refresh token")
    }
    const userData = jwt.verify(cookie.rht, REFRESH_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(401)
        return decoded
    })
    const isUser = await User.findById(userData.azp)
    if (!isUser) {
        return res.status(403).send("No user registered")
    }
    const { accessToken, refreshToken } = generateJwtPair(isUser)
    isUser.refreshToken = refreshToken
    await isUser.save()
    res.json(accessToken)

})


export default router