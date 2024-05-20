import express, { Request, Response } from "express";
import { ProductRouters } from "./modules/product/product.route";

const app = express();

app.use(express.json());

app.use("/api/products", ProductRouters);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Product server is running!",
  });
});

export default app;
