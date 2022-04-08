import { NextFunction, Request, Response, Router } from "express";
const IndexController: Router = Router();
// endpoint :/
IndexController.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: "Hello from Express!" });
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default IndexController;
