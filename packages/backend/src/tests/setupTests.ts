import User from "../models/User.model";
import users from "./mock";

beforeAll(async () => {
  try {
    await User.deleteOne({
      email: "random@.com",
      username: "random",
      password: "random",
    });
    await User.create(users[0]);
    await User.create(users[1]);
    await User.create(users[2]);
  } catch (error) {
    return false;
  }
});

afterAll(async () => {
  try {
    users.push({
      email: "random@.com",
      username: "random",
      password: "random",
    });
    users.forEach(async (element) => {
      await User.deleteOne({ email: element.email });
    });
  } catch (error) {
    return false;
  }
});
