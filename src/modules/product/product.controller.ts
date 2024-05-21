import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import ZodProductValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
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
  const { searchTerm } = req.query;

  try {
    const products = await ProductServices.getProducts(
      searchTerm ? (searchTerm as string) : ""
    );

    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term ${searchTerm} fetched successfully!`
        : "Products fetched successfully!",
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

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    const validDataForUpdate = ZodProductValidationSchema.parse(productData);

    const updatedProduct = await ProductServices.updateProductById(
      productId,
      validDataForUpdate
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductById(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      date: result,
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
  updateProductById,
  deleteProductById,
};
