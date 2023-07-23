import { spawn } from "child_process"
import { resolve } from "path"
import SiteConfigs from '../models/config.js'

const __dirname = resolve()
console.log(__dirname);

let player
let isPlaying
const db_url = process.env.MONGO_URL
const host = db_url.substring(0, db_url.lastIndexOf("/"))
const db = db_url.substring(db_url.lastIndexOf("/") + 1)



const startPlayer = async function () {
    isPlaying = true
    player = spawn("python", [`${__dirname}/player/player.py`], {
        env: {
            host: host,
            db: db,
            FFMPEG_PATH: process.env.FFMPEG_PATH
        }
    })
    player.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    player.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    player.on('close', (code) => {

        console.log(`child process exited with code ${code}`);
    });

}
const stopPlayer = async function () {
    if (isPlaying) {
        player.kill()
        isPlaying = false
    }
}
const restartPlayer = async function () {
    if (isPlaying) {
        stopPlayer()
        startPlayer()
    }
    isPlaying = true
}
const getPlayerStatus = function () {
    return isPlaying
}

export { startPlayer, stopPlayer, restartPlayer, getPlayerStatus }
