import { Schema, model } from "mongoose";

export interface ProductSchema {
  _id: any;
  categories: [{ type: string }];
  out_of_stock: boolean;
  product_name: string;
  product_description: string;
  product_price: number;
  currency: string;
}

const ProductSchema = new Schema<ProductSchema>({
  _id: { type: Schema.Types.ObjectId, required: true },
  categories: [{ type: String, required: true }],
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

export { readProduct, createProduct };

export default Product;
