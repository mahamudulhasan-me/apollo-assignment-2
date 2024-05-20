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
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    productId,
    payload,
    {
      new: true,
    }
  );
  return updatedProduct;
};

const deleteProductById = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId);
  return result;
};

export const ProductServices = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
