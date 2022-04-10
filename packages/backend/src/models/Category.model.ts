import { Schema, model } from "mongoose";
import { ProductSchema } from "./Product.model";

export interface CategorySchema {
  _id: any;
  products: [{ type: string }];
  category: string;
}

const CategorySchema = new Schema<CategorySchema>({
  _id: { type: Schema.Types.ObjectId, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
  category: { type: String, required: true, default: "default-category" },
});

const Category = model<CategorySchema>("Category", CategorySchema);

const createCategory = (product: CategorySchema) => {
  return Category.create(product).then((docCategory) => {
    return docCategory;
  });
};

const updateCategory = (category_id: string, product: ProductSchema) => {
  return Category.findByIdAndUpdate(category_id, { $push: { products: product._id } }, { new: true, useFindAndModify: false });
};

export { createCategory, updateCategory };

export default Category;
