import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const todoAdd = new Schema({
  inputText: {
    type: Schema.Types.String,
  },
  inputButton: {
    type: Schema.Types.Boolean,
  },
  id: {
    type: Schema.Types.String,
    unique: true,
    default: uuidv4,
  },
});

const newTodo = model("todoAdd", todoAdd);

export default newTodo;
