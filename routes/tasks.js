const express = require('express');
const router = express.Router();
const taskModel = require('../models/tasks');
const taskData = taskModel.getTasks(); 


router.get('/to-do', (req,res) => {

    console.log(taskData);
    res.render('template', {
        locals: {
            title: "Tasks Page",
            taskData: taskData
        },
        partials: {
            partial: "partial-tasks"
        }
    })
})

module.exports = router;