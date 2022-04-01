const Sequelize = require("sequelize");
import { Pool } from "pg";
import "dotenv/config";

const poolConfig = {
  database: process.env.DB_NAME as string,
  user: process.env.POSTGRES_USER as string,
  password: process.env.POSTGRES_PASSWORD as string,
  host: process.env.HOST as string,
  port: Number(process.env.DB_PORT),
};

const pool = new Pool(poolConfig);

export default pool;
