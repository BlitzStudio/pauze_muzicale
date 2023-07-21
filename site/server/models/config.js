import mongoose from 'mongoose'
import db from '../config/connectDb.js'

const configSchema = new mongoose.Schema({
    origin: {
        type: String,
        require: true
    },
    googleId: {
        type: String,
        require: true
    },
    domainCheck: {
        type: String,
        require: true
    },
    timeTable: {
        type: [String],
        require: true
    },
    player: {
        isPlaying: {
            type: Boolean,
            default: false
        },
        track: String
    }
})

const SiteConfig = mongoose.model("site_config", configSchema)


export default SiteConfig