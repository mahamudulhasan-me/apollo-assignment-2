import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import ZodOrderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderPayload = req.body;
    const validOrder = ZodOrderValidationSchema.parse(orderPayload);

    const createdOrder = await OrderServices.createOrder(validOrder);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: createdOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something went wrong!",
      error,
    });
  }
};

export const OrderControllers = {
  createOrder,
};
