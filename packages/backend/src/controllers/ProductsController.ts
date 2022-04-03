import { NextFunction, Request, Response, Router } from "express";
export const ProductsController: Router = Router();
import pool from "../config/Postgres";
// endpoint :/products
ProductsController.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    pool.query(`SELECT * FROM products`, (error, results) => {
      if (error) {
        throw error;
      }
    });
    res.status(200).send({ data: "Products" });
  } catch (e) {
    next(e);
  }
});

ProductsController.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", ["user1", "user1@.com"], (error, results) => {
      if (error) {
        throw error;
      }
    });
    res.status(200).send({ data: "Products" });
  } catch (e) {
    next(e);
  }
});

export default ProductsController;
