const express = require('express');
const router = express.Router();

router.get('/to-do', (req,res) => {
    res.render('template', {
        locals: {
            title: "Tasks Page"
        },
        partials: {
            partial: "partial-tasks"
        }
    })
})

module.exports = router;