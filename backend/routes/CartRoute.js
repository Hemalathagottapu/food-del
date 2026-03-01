import express from "express"
import { addToCart,removeFromcart,getCart } from "../controlers/Cartcontroller.js"
import authMiddleware from "../middleware/Auth.js";
const cartRouter=express.Router();

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromcart)
cartRouter.post("/get",authMiddleware,getCart)


export default cartRouter;
