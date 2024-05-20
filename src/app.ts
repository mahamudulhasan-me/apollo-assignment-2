import express, { Request, Response } from "express";
import { OrderRouters } from "./modules/order/order.route";
import { ProductRouters } from "./modules/product/product.route";

const app = express();
// parsers
app.use(express.json());

// routers
app.use("/api/products", ProductRouters);
app.use("/api/orders", OrderRouters);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Product server is running!",
  });
});

export default app;
