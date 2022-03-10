import { Router } from 'express';

const router = Router();

const check = (req, res, next) => {
    const status = true;
    if (status) {
        console.log("Heloo")
        next();
    } else {
        console.log("Anh ko cos quyeen hello");
    }
}

router.get("/api/products", check, (req, res) => {
    const products = [
        {
            id: 1,
            name: "Product A"
        },
        {
            id: 2,
            name: "Product B"
        },
    ];
    res.json(products);
});

router.post("/api/products", check, (req, res) => {
    console.log(req.body);
    const products = [
        {
            id: 1,
            name: "Product A"
        },
        {
            id: 2,
            name: "Product B"
        },
    ];
    products.push(req.body);
    res.json(products);
});

export default router;
