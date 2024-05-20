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

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductServices.getProducts();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await ProductServices.getProductById(productId);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getProductById,
};