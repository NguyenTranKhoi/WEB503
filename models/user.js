import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    email: {
        type: String,
        minlength: 10,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Product", userSchema);