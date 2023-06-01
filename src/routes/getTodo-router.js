import { getTodo } from "../controllers/project-controller";
import express from "express";

export const getTodoRouter = express.Router();
getTodoRouter.get("/gettodos", getTodo);
