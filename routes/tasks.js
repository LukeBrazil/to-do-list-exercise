const express = require("express");
const router = express.Router();
const taskModel = require("../models/tasks");

router.get("/to-do", async (req, res) => {
  const taskData = await taskModel.getTasks();
  console.log(taskData);
  res.render("template", {
    locals: {
      title: "Tasks Page",
      taskData: taskData,
    },
    partials: {
      partial: "partial-tasks",
    },
  });
});

module.exports = router;
