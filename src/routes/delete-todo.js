import { deleteTodo } from "../controllers/project-controller.js";
import express from "express";

export const deleteTodoRouter = express.Router();
deleteTodoRouter.delete("/deletetodos/:id", deleteTodo);
