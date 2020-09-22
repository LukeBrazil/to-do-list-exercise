const express = require('express');
const router = express.Router();

const renderPage = async res => {
    res.render('template', {
        locals: {
            title: "To do List",
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: 'partial-index'
        }
    })
}

router.get('/', (req, res) => {
    res.sendStatus(200)
});


module.exports = router;