import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients : [String],
    instructions: String,
    image: String
})

export default mongoose.model('recipe',recipeSchema)