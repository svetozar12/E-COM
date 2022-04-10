import { Schema, model } from "mongoose";
import Category, { CategorySchema } from "./Category.model";

export interface ProductSchema {
  _id: any;
  category_id?: { type: string };
  out_of_stock: boolean;
  product_name: string;
  product_description: string;
  product_price: number;
  currency: string;
}

const ProductSchema = new Schema<ProductSchema>({
  _id: { type: Schema.Types.ObjectId, required: true },
  category_id: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  out_of_stock: { type: Boolean, required: true, default: false },
  product_name: { type: String, required: true, unique: true, index: true },
  product_description: { type: String, default: "No description provided" },
  product_price: { type: Number, required: true },
  currency: { type: String, enum: ["Dollars", "Euros", "Pounds"], default: "Dollars", required: true },
});

const Product = model<ProductSchema>("Product", ProductSchema);

const readProduct = (product: ProductSchema) => {
  let product_instance = Product.findOne(product).exec();
  // @ts-ignore
  let product_category = Category.findOne({ _id: product_instance._id });
  return Product.findOne(product_category);
};

const createProduct = (product: ProductSchema) => {
  return Product.create(product).then((docProduct) => {
    return docProduct;
  });
};

const updateProduct = (product_id: string, category: CategorySchema) => {
  return Product.findByIdAndUpdate(product_id, { category_id: category._id }, { new: true, useFindAndModify: false });
};

const deletePorudct = (product: ProductSchema) => {
  let product_instance = Product.findOne(product).exec();
  // @ts-ignore
  let product_category = Category.findOne({ _id: product_instance._id });
  // @ts-ignore
  return Product.deleteOne({ _id: product_instance._id, category_id: product_category._id });
};

export { readProduct, createProduct, updateProduct, deletePorudct };

export default Product;
