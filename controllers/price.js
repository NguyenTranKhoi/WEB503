import mongoose from "mongoose";

const Price = mongoose.model("Price", { price: Number });

//Thêm price
export const create = async (req, res) => {
    try {
        const prices = await new Price(req.body).save();
        res.json(prices)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được giá"
        })
    }
}

//List price
export const lists = async (req, res) => {
    try {
        const price = await Price.find();
        res.json(price)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được giá"
        })
    }
}