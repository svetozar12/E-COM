import { Application, Router } from "express";
import ProductsController from "./controllers/ProductsController";
import IndexController from "./controllers/IndexController";

const _routes: [string, Router][] = [
  ["/", IndexController],
  ["/products", ProductsController],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
