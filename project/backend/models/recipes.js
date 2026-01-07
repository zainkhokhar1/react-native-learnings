import mongoose from "mongoose";

const reciepeSchema = new mongoose.Schema.create({
    title: {
        type: String,
        required: true
    },
    ingredients : [String],
    instructions: String,
    image: String
})

export default mongoose.model('reciepe',reciepeSchema)