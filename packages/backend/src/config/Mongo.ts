import * as mongoose from "mongoose";

const connection = `mongodb://localhost:27017/${process.env.DB_NAME}`;
// const connection = `mongodb://mongo:27017/${process.env.DB_NAME}`;

const connectDb = () => {
  return mongoose.connect(connection, {
    autoIndex: true,
  });
};
export default connectDb;
