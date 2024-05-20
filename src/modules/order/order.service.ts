import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrder = async (payload: IOrder) => {
  const createdOrder = await OrderModel.create(payload);
  return createdOrder;
};

export const OrderServices = {
  createOrder,
};
