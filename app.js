const http = require("http");
const express = require("express");

const app = express();

//middleware

const check = (req, res, next) => {
    const status = true;
    if (status) {
        console.log("Heloo")
        next();
    } else {
        console.log("Anh ko cos quyeen hello");
    }
}

app.get("/api/products", check, (req, res) => {
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
})

// app.use(check)
// app.use((req, res) => {
//     console.log("Bước 2");
// })

// const server = http.createServer((req, res) => {
//     console.log("url", req.url);
//     if (req.url === "/") {
//         res.setHeader('Content-Type', "text/html; charset=utf-8");
//         res.write("<html><body><h1>Hello lại là tôi đây</h1></body></html>")
//         res.end();
//     } else if (req.url === "/api/products") {
//         const products = [
//             {
//                 id: 1,
//                 name: "Admin A"
//             },
//             {
//                 id: 2,
//                 name: "Admin B"
//             }
//         ]
//     } else {
//         console.log("Khum bt");
//     }
// });

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})