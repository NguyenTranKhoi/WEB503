import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/products';
import { checkAuth, isAdmin, isAuth, reqireSignin } from '../middlewares/checkAuth';
import { userById } from '../controllers/user';
import { render } from 'express/lib/response';
const router = Router();

//resful API
//router product
router.get("/products", checkAuth, list);
router.get("/products/:id", checkAuth, read);
router.post("/products/:userId", create);
router.param("userId", userById);
router.delete("/products/:id", checkAuth, remove);
router.put("/products/:id", checkAuth, update);


export default router;
