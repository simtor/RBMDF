import mongoose from "mongoose"
import { timeStamp } from "console"

const syrupsSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true,
    },
},
{timestamp: true}
)

const Syrup = mongoose.model("Syrup", syrupsSchema)

export default Syrup