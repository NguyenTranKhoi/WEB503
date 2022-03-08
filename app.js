const http = require("http");

const server = http.createServer((req, res) => {
    console.log("url", req.url);
    if (req.url === "/") {
        res.setHeader('Content-Type', "text/html; charset=utf-8");
        res.write("<html><body><h1>Hello lại là tôi đây</h1></body></html>")
        res.end();
    } else if (req.url === "/api/products") {
        const products = [
            {
                id: 1,
                name: "Admin A"
            },
            {
                id: 2,
                name: "Admin B"
            }
        ]
    } else {
        console.log("Khum bt");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server is running port", PORT);
})