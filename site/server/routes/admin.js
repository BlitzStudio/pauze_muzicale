import { Router } from 'express'
import { AsyncHandler, CustomError, errorHandler } from '../middleware/errorHandler.js'
import isAuth from '../middleware/isAuth.js'
import SiteConfig from '../models/config.js'
import { startPlayer, stopPlayer, restartPlayer, isPlaying } from '../player/index.js'
import ML, { isRunning } from '../ml/index.js'

const router = Router()

router.use(isAuth)

router.post("/time", async (req, res) => {
    const { timeTable } = req.body
    if (req.user.role != "admin") {
        return res.sendStatus(401)
    }

    const site = await SiteConfig.findOne({})
    if (site) {
        site.timeTable = timeTable
        await site.save()
        restartPlayer()
        res.sendStatus(200)
    } else {
        const site = new SiteConfig({
            timeTable: timeTable
        })
        await site.save()
        restartPlayer()
        res.sendStatus(200)
    }
})

router.get("/time", async (req, res) => {
    if (req.user.role != "admin") {
        return res.sendStatus(401)
    }
    const site = await SiteConfig.findOne({})
    if (site?.timeTable.length && site) {
        res.status(200).json(site.timeTable)
    } else {
        res.sendStatus(404)
    }
})

router.get("/startplayer", (req, res) => {
    startPlayer()
    res.send("Player started")
})

router.get("/stopplayer", (req, res) => {
    stopPlayer()
    res.send("Player stopped")
})

router.get("/playerstatus", async (req, res) => {
    res.send(isPlaying)
})

router.get("/startfilter", (req, res) => {
    ML()
})

router.get("/filterstatus", (req, res) => {
    res.send(isRunning)
})

export default router