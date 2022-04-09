const { Router } = require("express");
const { listcart, addcart, listcarts, removecart } = require("../controllers/cart");

const router = Router()

router.get("/cart", listcart)
router.post("/cart", addcart)
router.get("/cart/:user", listcarts)
router.delete("/cart/:id", removecart)

export default router;
