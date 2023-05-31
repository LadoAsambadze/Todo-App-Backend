import newTodo from "../models/newTodo.js";

export const postTodo = async (req, res) => {
  try {
    const { inputText, inputButton } = req.body;
    const text = new newTodo({ inputText, inputButton });
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
    res.status(200).json({ getText });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
