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

const updateProductById = async (productId: string, payload: IProduct) => {
  const updatedProduct = ProductModel.findByIdAndUpdate(productId, payload, {
    new: true,
  });
  return updatedProduct;
};

export const ProductServices = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
};
