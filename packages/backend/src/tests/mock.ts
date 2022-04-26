import * as mongoose from "mongoose";

const users = [
  {
    email: "gergi@.com",
    username: "gergi",
    password: "ivan",
  },
  {
    email: "pesho@.com",
    username: "pesho",
    password: "pesho",
  },
  {
    email: "dancho@.com",
    username: "dancho",
    password: "dancho",
  },
];

const products = [
  {
    _id: new mongoose.Types.ObjectId(),
    product_name: "product1",
    product_description: "product_description_1",
    product_price: 12,
    currency: "Euros",
    out_of_stock: false,
    categories: ["summer"],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    product_name: "product2",
    product_description: "product_description_2",
    product_price: 12,
    currency: "Euros",
    out_of_stock: false,
    categories: ["summer", "winter"],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    product_name: "product3",
    product_description: "product_description_3",
    product_price: 12,
    currency: "Euros",
    out_of_stock: false,
    categories: ["winter"],
  },
];

const productForDeleteTest = {
  _id: new mongoose.Types.ObjectId(),
  product_name: "product34",
  product_description: "product_description_34",
  product_price: 12,
  currency: "Euros",
  out_of_stock: false,
  categories: ["winter"],
};

export { users, products, productForDeleteTest };
