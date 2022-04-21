import * as mongoose from "mongoose";
import "dotenv/config";
import Product from "../models/Product.model";
const connection = `mongodb://localhost:27017/${process.env.DB_NAME}`;
// const connection = `mongodb://mongo:27017/${process.env.DB_NAME}`;

const db = mongoose.connection;

db.once("open", async () => {
  if ((await Product.countDocuments().exec()) > 0) return;

  Promise.all([
    Product.create({
      _id: new mongoose.Types.ObjectId(),
      product_name: "product1",
      product_description: "product_description_1",
      product_price: 12,
      currency: "Euros",
      out_of_stock: false,
      categories: ["summer"],
    }),
    Product.create({
      _id: new mongoose.Types.ObjectId(),
      product_name: "product2",
      product_description: "product_description_2",
      product_price: 12,
      currency: "Euros",
      out_of_stock: false,
      categories: ["summer"],
    }),
    Product.create({
      _id: new mongoose.Types.ObjectId(),
      product_name: "product3",
      product_description: "product_description_3",
      product_price: 12,
      currency: "Euros",
      out_of_stock: false,
      categories: ["summer"],
    }),
    Product.create({
      _id: new mongoose.Types.ObjectId(),
      product_name: "product4",
      product_description: "product_description_4",
      product_price: 12,
      currency: "Euros",
      out_of_stock: false,
      categories: ["winter"],
    }),
    Product.create({
      _id: new mongoose.Types.ObjectId(),
      product_name: "product5",
      product_description: "product_description_5",
      product_price: 12,
      currency: "Euros",
      out_of_stock: false,
      categories: ["summer", "winter"],
    }),
    Product.create({
      _id: new mongoose.Types.ObjectId(),
      product_name: "product6",
      product_description: "product_description_6",
      product_price: 12,
      currency: "Euros",
      out_of_stock: false,
      categories: ["summer"],
    }),
    Product.create({
      _id: new mongoose.Types.ObjectId(),
      product_name: "product7",
      product_description: "product_description_7",
      product_price: 12,
      currency: "Euros",
      out_of_stock: false,
      categories: ["summer"],
    }),
    Product.create({
      _id: new mongoose.Types.ObjectId(),
      product_name: "product8",
      product_description: "product_description_8",
      product_price: 12,
      currency: "Euros",
      out_of_stock: false,
      categories: ["summer"],
    }),
  ]).then(() => console.log("Added Products"));
});

const connectDb = () => {
  return mongoose.connect(connection, {
    autoIndex: true,
  });
};
export default connectDb;
