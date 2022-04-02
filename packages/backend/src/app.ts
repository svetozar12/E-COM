import * as express from "express";
import * as cors from "cors";
import { routes } from "./routes";
import pool from "./config/Postgres";
// Boot express
const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to db
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log(result.rows);
  });
});
// Application routing
routes(app);
export default app;
