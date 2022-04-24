import * as request from "supertest";
import * as mongoose from "mongoose";
import app from "../../app";
import { productForDeleteTest } from "../mock";
import Product from "../../models/Product.model";

describe("ProductsController", () => {
  describe("/product POST", () => {
    test("/product {data} 201 Changed rosource", async () => {
      const product = {
        product_name: "product111",
        product_description: "product_description_1111",
        product_price: 12,
        currency: "Euros",
        out_of_stock: false,
        categories: ["winter"],
      };

      const response = await request(app).post("/product").set({ Accept: "application/json" }).send(product);

      expect(response.status).toBe(201);
      for (const property in product) {
        expect(response.body.data).toHaveProperty(property);
      }
      expect(JSON.stringify(response.body.data.categories)).toBe(JSON.stringify(product.categories));
      expect(JSON.stringify(response.body.data.currency)).toBe(JSON.stringify(product.currency));
      expect(JSON.stringify(response.body.data.product_price)).toBe(JSON.stringify(product.product_price));
      expect(JSON.stringify(response.body.data.out_of_stock)).toBe(JSON.stringify(product.out_of_stock));
      expect(JSON.stringify(response.body.data.product_description)).toBe(JSON.stringify(product.product_description));
      expect(JSON.stringify(response.body.data.product_name)).toBe(JSON.stringify(product.product_name));
    });

    test("/product {message} 400 BAD Request already exist", async () => {
      const product = {
        product_name: "product111",
        product_description: "product_description_1111",
        product_price: 12,
        currency: "Euros",
        out_of_stock: false,
        categories: ["winter"],
      };

      const response = await request(app).post("/product").set({ Accept: "application/json" }).send(product);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("Product already exist");
      await Product.deleteOne(product);
    });

    test("/product {data} 400 BAD Request empty object", async () => {
      const product = {
        product_name: "product111",
        product_description: "product_description_1111",
        product_price: 12,
        currency: "",
        out_of_stock: false,
        categories: ["winter"],
      };

      const response = await request(app).post("/product").set({ Accept: "application/json" }).send(product);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("Value of key: currency can't be empty");
    });
  });
});
