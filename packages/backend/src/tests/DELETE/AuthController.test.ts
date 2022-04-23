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

  describe("/auth/delete", () => {
    let del_token: string;
    beforeAll(async () => {
      await User.create({ username: "userForDelete", email: "userForDelete@.com", password: "userForDelete" });
      const user = await request(app)
        .post("/auth/login")
        .set("Accept", "application/json")
        .send({ email: "userForDelete@.com", password: "userForDelete" });

      del_token = user.body.Access_token;
    });
    afterAll(async () => {
      await User.deleteOne({ username: "userForDelete", email: "userForDelete@.com" });
    });
    test("/delete {user_id,Access_token,Refresh_token} 200 OK", async () => {
      const result = await request(app)
        .delete("/auth/delete")
        .set({ Accept: "application/json", Authorization: `Bearer ${del_token}` })
        .send();

      expect(result.status).toBe(200);
      expect(result.body).toHaveProperty("message");
      expect(result.body.message).toBe("User was deleted");
    });
  });
});
