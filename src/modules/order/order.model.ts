import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";

const OrderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
    message: "Email is required!",
  },
  productId: {
    type: String,
    required: true,
    message: "ProductId is required!",
  },
  price: {
    type: Number,
    required: true,
    message: "Price is required!",
  },
  quantity: {
    type: Number,
    required: true,
    message: "Quantity is required",
  },
});

export const OrderModel = model<IOrder>("Order", OrderSchema);
