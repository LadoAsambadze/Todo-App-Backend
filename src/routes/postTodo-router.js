import express from "express";
import { postTodo } from "../controllers/project-controller.js";

export const postTodoRouter = express.Router();
postTodoRouter.post("/posttodos", postTodo);
