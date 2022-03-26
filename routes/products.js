import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/products';
import { checkAuth, isAuth, reqireSignin } from '../middlewares/checkAuth';
import { lists } from '../controllers/price';
import { listPosts } from '../controllers/posts';
import { userById } from '../controllers/user';
const router = Router();

//resful API
//router product
router.get("/products", checkAuth, list);
router.get("/products/:id", checkAuth, read);
router.post("/products/:userId", reqireSignin, isAuth, create);
router.param("userId", userById);
router.delete("/products/:id", checkAuth, remove);
router.put("/products/:id", checkAuth, update);
//router price
router.get("/price", checkAuth, lists);
//router posts
router.get("/posts", checkAuth, listPosts);

export default router;
