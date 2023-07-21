import Downloader from '@blitz_cloud/youtube-mp3-downloader'
import mongoose from 'mongoose'
import db from '../config/connectDb.js'
import Music from '../models/musicTrack.js'

let YD = new Downloader({
    ffmpegPath: "C:\\Users\\ionut\\Desktop\\pauze_muzicale\\site\\server\\downloader\\ffmpeg\\bin\\ffmpeg.exe", // FFmpeg binary location
    outputPath: "C:\\Users\\ionut\\Desktop\\pauze_muzicale\\site\\server\\downloads", // Output file location (default: the home directory)
    youtubeVideoQuality: "highestaudio", // Desired video quality (default: highestaudio)
    queueParallelism: 1, // Download parallelism (default: 1)
    progressTimeout: 2000, // Interval in ms for the progress reports (default: 1000)
    allowWebm: false, // Enable download from WebM sources (default: false)
    outputFormat: "wav"
})
const run = async function () {
    const ids = (await Music.find({ status: 0 }, null, { limit: 5 })).map(ele => ele.ytId)
    console.log(ids)
    if (!ids) {
        process.exit(1)
    }
    YD.download(ids)
    YD.on("progress", function (progress) {
        console.log(JSON.stringify(progress));
    });
    YD.on("finished", async function (err, data) {
        await Music.findOneAndUpdate({ ytId: data.videoId }, { $set: { status: 1 } }).then((data) => { console.log(data) })
        console.log(JSON.stringify(data));
    });
}

export default run

// const run = async function () {
//     mongoose.connect("mongodb://localhost:27017/pauzeMuzicale").then((conn) => {
//         console.log(`DB connected to ${conn.connection.host}`)
//     }).catch((err) => {
//         console.log(`Error: ${err}`)
//         process.exit(1);
//     })
//     let i = 0
//     const ids = await Music.find({ status: 0 }, null, { limit: 5 })
//     console.log(ids)

//     if (ids.length) {
//         YD.download(ids[i].ydId, `${ids[i].ydId}.wav`);
//         YD.on("progress", function (progress) {
//             console.log(JSON.stringify(progress));
//         });
//         i++;
//         YD.on("error", async (err) => {
//             console.log("err")
//             console.log(err)
//             ids[i - 1].status = 2;
//             await ids[i - 1].save();
//             if (i < ids.length) {
//                 YD.download(ids[i].ydId, `${ids[i].ydId}.wav`);
//                 i++;
//             } else if (i == ids.length) {
//                 console.log(i);
//                 mongoose.connection.close();
//                 console.log("Done downloading");
//             }
//         })
//         YD.on("finished", async (err, data) => {
//             console.log(JSON.stringify(data));
//             ids[i - 1].status = 1;
//             await ids[i - 1].save();

//             if (i < ids.length) {
//                 YD.download(ids[i].ydId, `${ids[i].ydId}.wav`);
//                 i++;
//             } else if (i == ids.length) {
//                 console.log(i);
//                 mongoose.connection.close();
//                 console.log("Done downloading");
//             }
//         });
//     } else {
//         mongoose.connection.close();
//     }
// }


// const run = async function () {
//     mongoose.connect("mongodb://localhost:27017/pauzeMuzicale").then((conn) => {
//         console.log(`DB connected to ${conn.connection.host}`)
//     }).catch((err) => {
//         console.log(`Error: ${err}`)
//         process.exit(1);
//     })
//     const ids = await Music.find({ status: 0 }, null, { limit: 5 })
//     if (!ids) { process.exit(1) }
//     ids.forEach((id, i) => {
//         YD.download(ids[i].ydId, `${ids[i].ydId}.wav`);
//         YD.on("progress", function (progress) {
//             console.log(JSON.stringify(progress));
//         });
//         YD.on("finished", async (err, data) => {
//             console.log(JSON.stringify(data));
//             ids[i - 1].status = 1;
//             await ids[i - 1].save();
//         });
//     })
// }

run()