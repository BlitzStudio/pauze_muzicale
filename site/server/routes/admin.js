import { Router } from 'express'
import { AsyncHandler, CustomError, errorHandler } from '../middleware/errorHandler.js'
import isAuth from '../middleware/isAuth.js'
import SiteConfig from '../models/config.js'

const router = Router()

router.post("/time", isAuth, async (req, res) => {
    const { timeTable } = req.body
    if (req.user.role != "admin") {
        return res.sendStatus(401)
    }
    const site = await SiteConfig.findOne({})
    site.timeTable = timeTable
    await site.save()
    res.sendStatus(200)
})
router.get("/time", isAuth, async (req, res) => {
    if (req.user.role != "admin") {
        return res.sendStatus(401)
    }
    const site = await SiteConfig.findOne({})
    res.json(site.timeTable)
})


export default router