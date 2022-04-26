import User from "../models/User.model";
import Product from "../models/Product.model";
import { users, products } from "./mock";

beforeAll(async () => {
  try {
    await User.deleteOne({
      email: "random@.com",
      username: "random",
      password: "random",
    });

    for (const user of users) {
      await User.create(user);
    }

    for (const product of products) {
      await Product.create(product);
    }
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

    products.forEach(async (element) => {
      await Product.deleteOne({ _id: element._id });
    });
  } catch (error) {
    return false;
  }
});
