import mongoose from "mongoose";
import "dotenv-flow/config.js"
const connectDB = async function () {

    mongoose.connect(process.env["MONGO_URL"]).then((conn) => {
        console.log(`DB connected to ${conn.connection.host}`)
    }).catch((err) => {
        console.log(`Error: ${err}`)
        process.exit(1);
    })
}
export default connectDB