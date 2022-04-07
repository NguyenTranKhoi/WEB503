import mongoose, { Schema, ObjectId } from "mongoose";

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
    nameextra: {
        type: String,
        // unique: false
        // minlength: 3,
        // required: true
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