import jwt from 'jsonwebtoken'

const ACCESS_SECRET = process.env["JWT_ACCESS_SECRET"]
const REFRESH_SECRET = process.env["JWT_REFRESH_SECRET"]

export default function generateJwtPair(user) {
    const currentTime = (Date.now()) / 1000
    const token = {
        email: user.email,
        name: user.name,
        picture: user.picture,
        iat: currentTime,
        // expira intr o zi
        exp: currentTime + 24 * 60 * 60,
        role: user.role,
        azp: user._id,
        submittedCount: user.submittedCount,
        refreshWindow: user.refreshWindow,

    }
    const accessToken = jwt.sign(token, ACCESS_SECRET)
    // expira dupa o saptamana de la initiere
    token.exp = currentTime + 7 * 24 * 60 * 60
    const refreshToken = jwt.sign(token, REFRESH_SECRET)
    return { accessToken, refreshToken }
}