import express from "express";
import jwt from "jsonwebtoken";
import { googleIdentity } from "./utils/auth.js";
import Music from "./models/musicTrack.js";
import { AsyncHandler } from "./utils/errorHandler.js";
import { download } from "./utils/cron.js";

const router = express.Router();

const authMiddleware = function (req, res, next) {
  if (req.signedCookies.tk) {
    return next();
  }
  res.status(401).send("Nu ai permisiunea de a folosi acest link");
};

router.post("/login", async (req, res) => {
  const { ticket } = req.body;

  const { email, name, picture } = await googleIdentity(ticket).catch(() => {
    return res
      .status(500)
      .send(
        "Eroare interna nu am putut sa validam existenta acestui cont de Google "
      );
  });

  if (!email.includes(process.env["GOOGLE_DOMAIN_CHECK"])) {
    return res
      .status(401)
      .send("This is not an authorized domain for this app");
  }
  const payload = {
    email,
    name,
    picture,
  };

  const token = jwt.sign(payload, process.env["JWT_SECRET"]);

  return res
    .cookie("tk", "isLoggedIn", {
      path: "/",
      httpsOnly: true,
      signed: true,
    })
    .json({ token });
});

router.post(
  "/music",
  authMiddleware,
  AsyncHandler(async (req, res) => {
    const { ids } = req.body;
    console.log(ids);
    ids.forEach(async (id) => {
      const db = await Music.findById(id);
      console.log(db);
      if (!db) {
        const track = {
          _id: id,
        };
        const Track = new Music(track);
        await Track.save();
      }
    });

    res.send("ok");
  })
);
router.get("/ping", (req, res) => {
  res.send("Hello World");
});

router.get("/startDownload", (req, res) => {
  download();
  res.status(200).send("Start downloading");
});

export default router;
