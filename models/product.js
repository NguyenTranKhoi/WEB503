import mongoose, { Schema } from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new Schema({
    img: {
        type: String
    },
    name: {
        type: String,
        minLength: 5,
        required: true,
        // unique: true
    },
    pricedrop: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);