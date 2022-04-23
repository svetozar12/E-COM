import * as request from "supertest";
import app from "../../app";
import Product from "../../models/Product.model";

describe("AuthController", () => {
  describe("/auth/user", () => {
    test("/user {_id,username,email} 200 OK", async () => {
      const response = await request(app).get("/product?categories=winter").set({ Accept: "application/json" }).send();

      expect(response.status).toBe(200);
      expect(response.body.results[0]).toHaveProperty("_id");
      expect(response.body.results[0]).toHaveProperty("categories");
      expect(response.body.results[0]).toHaveProperty("out_of_stock");
      expect(response.body.results[0]).toHaveProperty("product_name");
      expect(response.body.results[0]).toHaveProperty("product_description");
      expect(response.body.results[0]).toHaveProperty("product_price");
      expect(response.body.results[0]).toHaveProperty("currency");
    });
  });
});
