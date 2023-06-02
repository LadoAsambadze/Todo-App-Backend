import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const todoAdd = new Schema({
  value: {
    type: Schema.Types.String,
    required: true,
  },
  active: {
    type: Schema.Types.Boolean,
    required: true,
  },
  id: {
    type: Schema.Types.String,
    unique: true,
    default: uuidv4,
  },
});

const newTodo = model("todoAdd", todoAdd);

export default newTodo;
