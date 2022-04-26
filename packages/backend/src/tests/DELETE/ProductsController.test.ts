import * as request from "supertest";
import * as mongoose from "mongoose";
import app from "../../app";
import { productForDeleteTest } from "../mock";
import Product from "../../models/Product.model";
beforeEach(async () => {
  await Product.create(productForDeleteTest);
});
afterEach(async () => {
  await Product.deleteOne(productForDeleteTest);
});
describe("ProductsController", () => {
  describe("/product/:id DELETE", () => {
    test("/product/:id {data} 201 OK", async () => {
      const result = await request(app).delete(`/product/${productForDeleteTest._id}`).set({ Accept: "application/json" }).send();

      expect(result.status).toBe(200);
      expect(result.body).toHaveProperty("data");
      expect(result.body.data).toBe(`deleted product with id: ${productForDeleteTest._id}`);
    });

    test("/product/:id {data} 404 NOT FOUND", async () => {
      const _id = new mongoose.Types.ObjectId();
      const result = await request(app).delete(`/product/${_id}`).set({ Accept: "application/json" }).send();

      expect(result.status).toBe(404);
      expect(result.body).toHaveProperty("message");
      expect(result.body.message).toBe(`Product with id: ${_id} doesn't exist`);
    });
  });
});
