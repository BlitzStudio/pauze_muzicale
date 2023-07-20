import { CronJob } from 'cron'
import download from './index.js'

const downloadTrack = new CronJob(
    "*/20 * * * *", download,
    null,
    true,
    "Europe/Bucharest"
)

export default downloadTrack