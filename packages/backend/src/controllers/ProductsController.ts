import { NextFunction, Request, Response, Router } from "express";
import * as mongoose from "mongoose";
import Category, { CategorySchema, createCategory } from "../models/Category.model";
import Product, { ProductSchema, readProduct, createProduct, updateProductCategories } from "../models/Product.model";
export const ProductsController: Router = Router();

// endpoint :/products
ProductsController.get("/:_id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id: string = req.params._id;
    const product = await readProduct(_id);
    if (!product) return res.status(404).json({ message: `product with id: ${_id} wasn't found` });
    res.status(200).json({ data: product });
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
    const defaultProduct = await updateProductCategories(newProduct._id, newCatogory);

    res.status(200).json({ data: defaultProduct });
  } catch (e) {
    return e;
  }
});

ProductsController.put("/:_id", async (req: Request, res: Response) => {
  try {
    const _id: string = req.params._id;
    const newProduct: ProductSchema = {
      _id: new mongoose.Types.ObjectId(),
      product_name: req.body.product_name,
      product_description: req.body.product_description,
      product_price: req.body.product_price,
      currency: req.body.currency,
      out_of_stock: req.body.out_of_stock,
    };

    await Product.findByIdAndUpdate(_id, newProduct, (err: Error, product: ProductSchema) => {
      if (err) return res.status(404).json({ message: "Error occurred while searching for product", err });
      return res.status(201).json({ data: product });
    });
  } catch (e) {
    return e;
  }
});

ProductsController.delete("/:_id", async (req: Request, res: Response) => {
  try {
    const _id: string = req.params._id;

    const product = await Product.findOne({ _id }).exec();
    if (!product) return res.status(404).json({ message: `Product with id: ${_id} doesn't exist` });

    await Category.deleteOne({ _id: product.category_id }).exec();
    await Product.deleteOne({ _id: product._id }).exec();

    res.status(201).json({ data: `deleted product with id: ${_id}` });
  } catch (e) {
    return e;
  }
});

export default ProductsController;
