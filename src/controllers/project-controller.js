import newTodo from "../models/newTodo.js";

export const postTodo = async (req, res) => {
  try {
    const { value, active } = req.body;
    const text = new newTodo({ value, active });
    const result = await text.save();
    res
      .status(200)
      .json({ message: "Successfully created todo", todo: result });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getTodo = async (req, res) => {
  try {
    const getText = await newTodo.find();
    res.status(200).json(getText);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await newTodo.deleteOne({ id });
    res.status(200).json({ message: "Successfully deleted todo" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const toggleTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await newTodo.findOne({ id });
    task.active = !task.active;
    await task.save();
    res.status(201).json({ message: "Successfully change todo" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteCompleted = async (req, res) => {
  try {
    await newTodo.deleteMany({ active: true });
    res.status(200).json({ message: "Successfully deleted completed" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
