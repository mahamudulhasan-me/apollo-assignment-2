import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (payload: IProduct) => {
  const result = await ProductModel.create(payload);

  return result;
};

const getProducts = async () => {
  const products = await ProductModel.find();
  return products;
};

const getProductById = async (productId: string) => {
  const product = await ProductModel.findById(productId);
  return product;
};

export const ProductServices = {
  createProduct,
  getProducts,
  getProductById,
};
