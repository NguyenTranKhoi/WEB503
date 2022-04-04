import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    img: {
        type: String,
        required: true,
        minlength: 5,
        unique: true
    },
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    nameextra: {
        type: String,
        minlength: 3,
        required: true,
        unique: true
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
        type: Object,
        ref: "Category"
    }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);