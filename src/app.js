import cors from 'cors';
import productRouter from '../routes/products';
import morgan from 'morgan';
import express from 'express';

const app = express();
//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

app.use("/api", productRouter);
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})