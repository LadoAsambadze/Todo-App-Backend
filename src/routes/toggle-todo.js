import express from "express";
import { toggleTodo } from "../controllers/project-controller.js";

export const toggleRoute = express.Router();
toggleRoute.delete("/puttodo/:id", toggleTodo);
