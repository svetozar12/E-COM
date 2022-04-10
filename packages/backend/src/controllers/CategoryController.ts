import { NextFunction, Request, Response, Router } from "express";
import Category, { CategorySchema } from "../models/Category.model";
export const CategoryContoller: Router = Router();

// endpoint :/category
CategoryContoller.get("/:_id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id: string = req.params._id;
    const category: CategorySchema | null = await Category.findOne({ _id });
    if (!category) return res.status(404).json({ message: `category with id: ${_id} wasn't found` });
    res.status(200).json({ data: category });
  } catch (e) {
    next(e);
  }
});

export default CategoryContoller;
