// @ts-nocheck

import { NextFunction, Request, Response, Router } from "express";
import * as mongoose from "mongoose";
import Product, { ProductSchema, readProduct, createProduct } from "../models/Product.model";
import paginatedResults from "../middleware/pagination";
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

ProductsController.get("/", paginatedResults(Product), async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (res.paginatedResults === "please provide category") res.status(400).json({ message: res.paginatedResults });
    if (!res.paginatedResults || res.paginatedResults.length <= 0)
      return res.status(404).json({ message: `The admin or moderator should add products` });
    res.status(200).json(res.paginatedResults);
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
      categories: req.body.categories,
    };

    const checkIfExist = await Product.findOne({ product_name: product.product_name }).exec();

    if (checkIfExist) return res.status(400).json({ message: "Product already exist" });

    for (const [key, value] of Object.entries(product)) {
      if (value === "") return res.status(400).json({ message: `Value of key: ${key} can't be empty` });
    }

    const newProduct = await createProduct(product);

    res.status(201).json({ data: newProduct });
  } catch (e) {
    return e;
  }
});

ProductsController.put("/:_id", async (req: Request, res: Response) => {
  try {
    const _id: string = req.params._id;
    const oldProduct = await Product.findOne({ _id });

    if (!oldProduct) return res.status(404).json({ message: `Product with id:${_id} not found` });

    const productObj: ProductSchema = {
      _id: _id,
      product_name: req.body.product_name,
      product_description: req.body.product_description || oldProduct?.product_description,
      product_price: req.body.product_price || oldProduct?.product_price,
      currency: req.body.currency || oldProduct?.currency,
      out_of_stock: req.body.out_of_stock || oldProduct?.out_of_stock,
      categories: req.body.categories || oldProduct?.categories,
    };

    Product.findOneAndUpdate({ _id }, productObj, { new: true }, (err: Error, product: ProductSchema) => {
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

    await Product.deleteOne({ _id: product._id }).exec();

    res.status(200).json({ data: `deleted product with id: ${_id}` });
  } catch (e) {
    return e;
  }
});

export default ProductsController;
