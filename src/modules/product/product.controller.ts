import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import ZodProductValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body.product;
    const validData = ZodProductValidationSchema.parse(productData);
    const product = await ProductServices.createProduct(validData);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: product,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const ProductControllers = {
  createProduct,
};
