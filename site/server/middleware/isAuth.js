import jwt from 'jsonwebtoken'
const ACCESS_SECRET = process.env["JWT_ACCESS_SECRET"]
const REFRESH_SECRET = process.env["JWT_REFRESH_SECRET"]

export default function isAuth(req, res, next) {
    const authorization = req.headers.authorization
    if (!authorization) {
        return res.sendStatus(401)
    }
    const token = authorization.split(" ")[1]
    jwt.verify(token, ACCESS_SECRET, (err, decoded) => {

        if (err) {
            console.log(err)
            return res.sendStatus(403)
        }
        req.user = decoded
        next()
    })
}