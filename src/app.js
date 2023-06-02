import express from "express";
import bodyParser from "body-parser";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import {
  deleteCompleted,
  getTodo,
  postTodo,
  toggleTodo,
} from "./controllers/project-controller.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import cors from "cors";
import { postTodoRouter } from "./routes/postTodo-router.js";
import { getTodoRouter } from "./routes/getTodo-router.js";
import { deleteTodoRouter } from "./routes/delete-todo.js";
import { toggleRoute } from "./routes/toggle-todo.js";

dotenv.config();
const app = express();
connect();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", postTodoRouter);
app.use("/api", getTodoRouter);
app.use("/api", deleteTodoRouter);
app.use("/api/puttodo/:id", toggleTodo);
app.use("/api/dltcomp/:id", deleteCompleted);

app.use("/", ...swaggerMiddleware());

app.listen(3000);
