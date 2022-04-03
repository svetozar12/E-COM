import * as express from "express";
import * as cors from "cors";
import { routes } from "./routes";
import connectDb from "./config/Mongo";
// Boot express
const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to db
connectDb();
// Application routing
routes(app);
export default app;
