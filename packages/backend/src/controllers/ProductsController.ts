import { NextFunction, Request, Response, Router } from "express";
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
    const username = req.body.username;
    const dbRes = new User({
      type: "POST",
      username,
    });
    dbRes.save();
    res.status(200).json({ data: dbRes });
  } catch (e) {
    next(e);
  }
});

export default ProductsController;
