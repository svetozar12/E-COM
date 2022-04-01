import { NextFunction, Request, Response, Router } from "express";
export const ProductsController: Router = Router();
// endpoint :/products
ProductsController.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: "Products" });
  } catch (e) {
    next(e);
  }
});

export default ProductsController;
