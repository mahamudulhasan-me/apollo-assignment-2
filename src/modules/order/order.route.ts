import { Router } from "express";
import { OrderControllers } from "./order.controller";

const router = Router();

const { createOrder } = OrderControllers;

router.post("/", createOrder);

export const OrderRouters = router;
