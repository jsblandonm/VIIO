import Tasks from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Tasks.find({
    user: req.user.id,
  }).populate("user");
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;
  const newTask = new Tasks({
    title,
    description,
    date,
    user: req.user.id,
  });
  const savedTask = await newTask.save();
  res.json(savedTask);
};

export const getTask = async (req, res) => {
  const task = await Tasks.findById(req.params.id).populate("user");

  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

export const deleteTasks = async (req, res) => {
  const task = await Tasks.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  return res.sendStatus(204);
};

export const updateTasks = async (req, res) => {
  const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};
