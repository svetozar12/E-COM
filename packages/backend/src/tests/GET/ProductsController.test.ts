import * as request from "supertest";
import app from "../../app";
import Product from "../../models/Product.model";

describe("ProductsController", () => {
  describe("/product/:id GET", () => {
    let product: any;
    beforeAll(async () => {
      const response = await request(app).get("/product?categories=winter").set({ Accept: "application/json" }).send();
      product = response.body.results[0];
    });
    test(`/product/:id {_id,categories,out_of_stock,product_name,product_description,product_price,currency} 200 OK`, async () => {
      const response = await request(app).get(`/product/${product._id}`).set({ Accept: "application/json" }).send();

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveProperty("_id");
      expect(response.body.data).toHaveProperty("categories");
      expect(response.body.data).toHaveProperty("out_of_stock");
      expect(response.body.data).toHaveProperty("product_name");
      expect(response.body.data).toHaveProperty("product_description");
      expect(response.body.data).toHaveProperty("product_price");
      expect(response.body.data).toHaveProperty("currency");
    });

    test(`/product/:id {message} 404 NOT FOUND Bad id`, async () => {
      const response = await request(app).get(`/product/62647c96a1d3d1c38f80b81e`).set({ Accept: "application/json" }).send();

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe(`product with id: 62647c96a1d3d1c38f80b81e wasn't found`);
    });
  });
  describe("/product GET", () => {
    test("/product?categories=winter {_id,categories,out_of_stock,product_name,product_description,product_price,currency} 200 OK", async () => {
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

    test("/product?categories= 400 BAD Bad category provided", async () => {
      const response = await request(app).get("/product?categories=").set({ Accept: "application/json" }).send();

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("please provide category");
    });

    test("/product?categories=winter 404 NOT FOUND No products", async () => {
      await Product.collection.drop();
      const response = await request(app).get("/product?categories=winter").set({ Accept: "application/json" }).send();

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("The admin or moderator should add products");
    });
  });
});
