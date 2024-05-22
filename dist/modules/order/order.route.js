"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const router = express_1.Router();
const { createOrder, getOrders } = order_controller_1.OrderControllers;
router.get("/", getOrders);
router.post("/", createOrder);
exports.OrderRouters = router;
