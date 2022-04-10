import { NextFunction, Request, Response, Router } from "express";
import * as mongoose from "mongoose";
import { CategorySchema, createCategory } from "../models/Category.model";
import Product, { ProductSchema, createProduct, updateProduct } from "../models/Product.model";
export const ProductsController: Router = Router();
import User from "../models/User.model";
// endpoint :/products
ProductsController.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dbRes = await User.find({ username: "ivancho" });
    res.status(200).json({ data: dbRes });
  } catch (e) {
    next(e);
  }
});

ProductsController.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product: ProductSchema = {
      _id: new mongoose.Types.ObjectId(),
      product_name: req.body.product_name,
      product_description: req.body.product_description,
      product_price: req.body.product_price,
      currency: req.body.currency,
      out_of_stock: req.body.out_of_stock,
    };

    const checkIfExist = await Product.findOne(product).exec();

    if (checkIfExist) return res.status(400).json({ message: "Product already exist" });

    for (const [key, value] of Object.entries(product)) {
      if (value === "") return res.status(400).json({ message: `Value of key: ${key} can't be empty` });
    }

    const newProduct = await createProduct(product);

    const category: CategorySchema = {
      _id: new mongoose.Types.ObjectId(),
      products: newProduct._id,
      categories: req.body.categories,
    };

    for (const [key, value] of Object.entries(category)) {
      if (value === "") return res.status(400).json({ message: `Value of key: ${key} can't be empty` });
    }

    const newCatogory = await createCategory(category);
    const defaultProduct = await updateProduct(newProduct._id, newCatogory);

    res.status(200).json({ data: defaultProduct });
  } catch (e) {
    next(e);
  }
});

export default ProductsController;
