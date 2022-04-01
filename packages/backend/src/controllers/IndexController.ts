import { NextFunction, Request, Response, Router } from "express";
const IndexController: Router = Router();
// endpoint :/
IndexController.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: "Hello from Express!" });
  } catch (e) {
    next(e);
  }
});

export default IndexController;
