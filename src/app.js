import cors from 'cors';
import productRouter from '../routes/products';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

//router
app.use("/api", productRouter);

//connect database
mongoose.connect("mongodb://localhost:27017/we16309")
    .then(() => console.log("Kết nối đb thành công"))
    .catch((error) => console.log(error))

//connection
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})