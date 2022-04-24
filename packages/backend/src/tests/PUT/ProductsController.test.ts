import * as request from "supertest";
import * as mongoose from "mongoose";
import app from "../../app";
import { productForDeleteTest } from "../mock";
import Product from "../../models/Product.model";

describe("ProductsController", () => {
  describe("/product/:id PUT", () => {
    test("/product/:id {data} 201 Changed rosource", async () => {
      await Product.create(productForDeleteTest);

      const response = await request(app)
        .put(`/product/${productForDeleteTest._id}`)
        .set({ Accept: "application/json" })
        .send({ product_name: "some_new_name" });

      expect(response.status).toBe(201);
      expect(response.body.data).toHaveProperty("_id");
      expect(response.body.data).toHaveProperty("categories");
      expect(response.body.data).toHaveProperty("out_of_stock");
      expect(response.body.data).toHaveProperty("product_name");
      expect(response.body.data.product_name).toBe("some_new_name");
      expect(response.body.data).toHaveProperty("product_description");
      expect(response.body.data).toHaveProperty("product_price");
      expect(response.body.data).toHaveProperty("currency");
      await Product.deleteOne(productForDeleteTest);
    });
    test("/product/:id {message} 404 NOT FOUND", async () => {
      const _id = new mongoose.Types.ObjectId();
      const response = await request(app)
        .put(`/product/${_id}`)
        .set({ Accept: "application/json" })
        .send({ product_name: "some_new____name" });

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe(`Product with id:${_id} not found`);
    });
  });
});
