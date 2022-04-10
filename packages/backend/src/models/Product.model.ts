import { Schema, model } from "mongoose";
import Category, { CategorySchema } from "./Category.model";

export interface ProductSchema {
  _id: any;
  category_id?: [{ type: string }];
  out_of_stock: boolean;
  product_name: string;
  product_description: string;
  product_price: number;
  currency: string;
}

const ProductSchema = new Schema<ProductSchema>({
  _id: { type: Schema.Types.ObjectId, required: true },
  category_id: [{ type: Schema.Types.ObjectId, ref: "Category", required: true }],
  out_of_stock: { type: Boolean, required: true, default: false },
  product_name: { type: String, required: true, unique: true, index: true },
  product_description: { type: String, default: "No description provided" },
  product_price: { type: Number, required: true },
  currency: { type: String, enum: ["Dollars", "Euros", "Pounds"], default: "Dollars", required: true },
});

const Product = model<ProductSchema>("Product", ProductSchema);

const readProduct = (_id: string) => {
  return Product.findOne({ _id }).exec();
};

const createProduct = (product: ProductSchema) => {
  return Product.create(product).then((docProduct) => {
    return docProduct;
  });
};

const updateProductCategories = (product_id: string, category: CategorySchema) => {
  return Product.findByIdAndUpdate(product_id, { $push: { category_id: category._id } }, { new: true, useFindAndModify: false });
};

export { readProduct, createProduct, updateProductCategories };

export default Product;
