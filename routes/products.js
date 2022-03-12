import { Router } from 'express';
import { list, read, remove, update } from '../controllers/products';
import { checkAuth, chekAuth } from '../middlewares/checkAuth'
const router = Router();

//resful API
router.get("/products", checkAuth, list);
router.get("/products/:id", checkAuth, read);
router.post("/products", checkAuth,);
router.delete("/products:id", checkAuth, remove);
router.put("/products:id", checkAuth, update);

export default router;
