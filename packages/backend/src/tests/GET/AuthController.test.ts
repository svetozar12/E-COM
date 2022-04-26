import * as request from "supertest";
import app from "../../app";
import User from "../../models/User.model";

describe("AuthController", () => {
  let token: string;
  beforeAll(async () => {
    const response = await request(app).post("/auth/login").set("Accept", "application/json").send({
      email: "gergi@.com",
      password: "ivan",
    });

    token = response.body.Access_token;
  });

  describe("/auth/user", () => {
    test("/user {_id,username,email} 200 OK", async () => {
      const response = await request(app)
        .get("/auth/user")
        .set({ Accept: "application/json", Authorization: `Bearer ${token}` })
        .send();

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveProperty("_id");
      expect(response.body.data).toHaveProperty("username");
      expect(response.body.data).toHaveProperty("email");
    });

    test("/user {message} 403 FORBIDDEN Bad token", async () => {
      const response = await request(app).get("/auth/user").set({ Accept: "application/json", Authorization: `Bearer ` }).send();

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("Bad token");
    });
  });
});
