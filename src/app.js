import cors from 'cors';
import productRouter from '../routes/products';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import categoryRoute from '../routes/category';
import authRouter from '../routes/auth';
import cartRouter from '../routes/cart';

const app = express();
//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

//router
app.use("/api", productRouter);
app.use("/api", categoryRoute);
app.use("/api", authRouter);
app.use("/api", cartRouter);


//connect database
mongoose.connect("mongodb://localhost:27017/we16309")
    .then(() => console.log("Kết nối đb thành công"))
    .catch((error) => console.log(error))

//connection
const PORT = 3003;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})