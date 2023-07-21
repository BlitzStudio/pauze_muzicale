import { spawn } from 'child_process'
import { resolve } from 'path'

const __dirname = resolve()
let isRunning = false


const startMl = async function () {
    isRunning = true
    let ml = spawn("python", [`${__dirname}/ml/prediction.py`])

    ml.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    ml.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    ml.on('close', (code) => {
        isRunning = false
        console.log(`child process exited with code ${code}`);
    });

}

export default startMl
export { isRunning }