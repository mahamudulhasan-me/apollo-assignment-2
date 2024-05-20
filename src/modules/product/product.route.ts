import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.get("/", ProductControllers.getProducts);
router.get("/:productId", ProductControllers.getProductById);
router.post("/", ProductControllers.createProduct);

export const ProductRouters = router;
