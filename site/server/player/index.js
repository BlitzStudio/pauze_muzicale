import { spawn } from "child_process"
import { resolve } from "path"
import SiteConfigs from '../models/config.js'

const __dirname = resolve()
console.log(__dirname);

let player



const startPlayer = async function () {
    player = spawn("python", [`${__dirname}/player/player.py`])
    await SiteConfigs.findOneAndUpdate({}, {
        $set: {
            player: {
                isPlaying: true
            }
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
    return true
}
const stopPlayer = async function () {
    player.kill()
    await SiteConfigs.findOneAndUpdate({}, {
        $set: {
            player: {
                isPlaying: false
            }
        }
    })
    return false
}
const restartPlayer = function () {
    stopPlayer()
    startPlayer()
}

export { startPlayer, stopPlayer, restartPlayer }
