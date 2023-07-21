import { spawn } from "child_process"
import { resolve } from "path"

const __dirname = resolve()
console.log(__dirname);

const player = spawn("python", [`${__dirname}/player.py`])

player.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

player.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

player.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
