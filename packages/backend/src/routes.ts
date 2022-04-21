import { Application, Router } from "express";
import ProductsController from "./controllers/ProductsController";
import IndexController from "./controllers/IndexController";
import AuthController from "./controllers/AuthController";
const _routes: [string, Router][] = [
  ["/", IndexController],
  ["/product", ProductsController],
  ["/auth", AuthController],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
