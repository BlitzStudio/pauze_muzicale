import { CronJob } from "cron";
import YoutubeMp3Downloader from "@blitz_cloud/youtube-mp3-downloader";
import mongoose from "mongoose";
import Music from "../models/musicTrack.js";

const YD = new YoutubeMp3Downloader({
  ffmpegPath: process.env["FFMPEG_PATH"], // FFmpeg binary location
  outputPath: "/app/music", // Output file location (default: the home directory)
  youtubeVideoQuality: "highestaudio", // Desired video quality (default: highestaudio)
  queueParallelism: 1, // Download parallelism (default: 1)
  progressTimeout: 2000, // Interval in ms for the progress reports (default: 1000)
  allowWebm: false, // Enable download from WebM sources (default: false)
});

const download = async function () {
  console.log("Start downloading");
  mongoose
    .connect(process.env["DB_URL"])
    .then(() => {
      console.log("DATABASE:Online");
    })
    .catch((err) => {
      console.log("DATABASE:Offline");
      console.log(err);
    });
  let i = 0;

  const ids = await Music.find({ status: 0 });
  console.log(ids);
  if (ids.length) {
    YD.download(ids[i]._id, `${ids[i]._id}.wav`);
    YD.on("progress", function (progress) {
      console.log(JSON.stringify(progress));
    });
    i++;
    YD.on("finished", async function (err, data) {
      console.log(JSON.stringify(data));
      ids[i - 1].status = 1;
      await ids[i - 1].save();

      if (i < ids.length) {
        YD.download(ids[i]._id, `${ids[i]._id}.wav`);
        i++;
      } else if (i == ids.length) {
        console.log(i);
        mongoose.connection.close();
        console.log("Done downloading");
      }
    });
  }
};

const downloadTracks = new CronJob(
  "*/20 * * * *",
  download,
  null,
  true,
  "Europe/Bucharest"
);
export { download };
export default downloadTracks;
