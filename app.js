import express from "express";
import bodyParser from "body-parser";
import connect from "./src/database/mongo.js";
import dotenv from "dotenv";
import { getTodo, postTodo } from "./src/controllers/project-controller.js";
import swaggerMiddleware from "./src/middlewares/swagger-middleware.js";
import cors from "cors";
dotenv.config();
const app = express();
connect();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", postTodo);
app.use("/api", getTodo);



app.use("/", ...swaggerMiddleware());

app.listen(3000);
