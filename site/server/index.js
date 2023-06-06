import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import "dotenv-flow/config.js";
import api from "./api.js";

import { dirname } from "path";
import { fileURLToPath } from "url";
import downloadTracks, { download } from "./utils/cron.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const { PORT, HOST } = process.env;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser(process.env["COOKIE_SECRET"]));
app.use(
  cors({
    origin: process.env["ORIGIN"],
    credentials: true,
  })
);

mongoose
  .connect(process.env["DB_URL"])
  .then(() => {
    console.log("DATABASE:Online");
  })
  .catch((err) => {
    console.log("DATABASE:Offline");
    console.log(err);
  });

app.use("/api", api);
app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
  res.render("index");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).send(message);
});

app.listen(PORT, HOST, () => {
  // downloadTracks.start();
  console.log(`Server is listening on ${HOST}:${PORT}`);
});
