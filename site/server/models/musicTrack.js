import mongoose from "mongoose";
const Schema = mongoose.Schema;

const musicTrack = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Music = mongoose.model("Music", musicTrack);

export default Music;
