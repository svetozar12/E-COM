import * as request from "supertest";
import app from "../../app";

describe("AuthController", () => {
  let token: string;
  beforeAll(async () => {
    const response = await request(app).post("/auth/login").set("Accept", "application/json").send({
      email: "gergi@.com",
      password: "ivan",
    });

    token = response.body.Access_token;
  });
  describe("/auth/login", () => {
    test("/login {user_id,Access_token,Refresh_token} 200 OK", async () => {
      const result = await request(app).post("/auth/login").set("Accept", "application/json").send({
        email: "gergi@.com",
        password: "ivan",
      });

      expect(result.status).toBe(200);
      expect(result.body).toHaveProperty("user_id");
      expect(result.body).toHaveProperty("Access_token");
      expect(result.body).toHaveProperty("Refresh_token");
    });

    test("/login {message} 404 NOT FOUND user(by email)", async () => {
      const result = await request(app).post("/auth/login").set("Accept", "application/json").send({
        email: "dawdawdaw@.com",
        password: "pesho",
      });

      expect(result.status).toBe(404);
      expect(result.body).toHaveProperty("message");
      expect(result.body.message).toBe("User doesn't exist");
    });

    test("/login {message} 400 BAD Wrong password", async () => {
      const result = await request(app).post("/auth/login").set("Accept", "application/json").send({
        email: "pesho@.com",
        username: "pesho@.com",
        password: "dawdaw",
      });

      expect(result.status).toBe(400);

      expect(result.body).toHaveProperty("message");
      expect(result.body.message).toBe("Wrong password");
    });
    test("/login {message} 400 BAD Empty body", async () => {
      const result = await request(app).post("/auth/login").set("Accept", "application/json").send();

      expect(result.status).toBe(400);

      expect(result.body).toHaveProperty("message");
      expect(result.body.message).toBe("Email and password are required");
    });
  });

  describe("/auth/register", () => {
    test("/register {user_id,Access_token,Refresh_token} 200 OK", async () => {
      const result = await request(app).post("/auth/register").set("Accept", "application/json").send({
        email: "random@.com",
        username: "random",
        password: "random",
      });

      expect(result.status).toBe(200);
      expect(result.body).toHaveProperty("user_id");
      expect(result.body).toHaveProperty("Access_token");
    });

    test("/register {message} 400 BAD Exist", async () => {
      const result = await request(app).post("/auth/register").set("Accept", "application/json").send({
        email: "random@.com",
        username: "random",
        password: "random",
      });

      expect(result.status).toBe(400);
      expect(result.body).toHaveProperty("message");
      expect(result.body.message).toBe("User exist");
    });

    test("/register {message} 400 BAD Empty body", async () => {
      const result = await request(app).post("/auth/register").set("Accept", "application/json").send();

      expect(result.status).toBe(400);
      expect(result.body).toHaveProperty("message");
      expect(result.body.message).toBe("Email , Username and Password are required");
    });
  });

  describe("/auth/refresh", () => {
    test("/refresh {user_id,Access_token,Refresh_token} 200 OK", async () => {
      const user = await request(app)
        .get("/auth/user")
        .set({ Accept: "application/json", Authorization: `Bearer ${token}` })
        .send({
          email: "gergi@.com",
          password: "ivan",
        });
      const result = await request(app).post("/auth/refresh").set("Accept", "application/json").send({
        id: user.body.data._id,
      });

      expect(result.status).toBe(200);
      expect(result.body).toHaveProperty("user_id");
      expect(result.body).toHaveProperty("Access_token");
      expect(result.body).toHaveProperty("Refresh_token");
    });

    test("/refresh {user_id,Access_token,Refresh_token} 200 OK", async () => {
      const result = await request(app).post("/auth/refresh").set("Accept", "application/json").send({
        id: "daw3213daw23",
      });

      expect(result.status).toBe(404);
      expect(result.body).toHaveProperty("message");
      expect(result.body.message).toBe("User not found");
    });
  });
});
