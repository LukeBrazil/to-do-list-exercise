const express = require('express');
const router = express.Router();
const userModel = require('../models/users');
const bcrypt = require('bcryptjs');

router.get('/login', (req,res) => {
    res.render('template', {
        locals: {
            title: "Login Page",
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: "partial-log-in"
        }
    })
})

router.get('/signup', (req,res) => {
    res.render('template', {
        locals: {
            title: "Sign Up Page",
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: "partial-sign-up"
        }
    })
})

router.post("/signup", (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    // Salt and Hash Password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)

    const userInstance = new userModel(null, name, email, hash); 

    userInstance.addUser().then(response => {
        if(response.id !== undefined) {
            res.redirect('/users/login')
        } else {
            res.redirect('/users/signup');
        }
        
    })
})

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userInstance = new userModel(null, null, email, password);
    userInstance.login().then(response => {
        req.session.is_logged_in = response.isValid;
        if(!!response.isValid) {
            const {name, user_id} = response;
            req.session.name = name;
            req.session.user_id = user_id;
            res.redirect('/tasks/to-do');
        } else {
            res.sendStatus(401)
        }
    })
})

module.exports = router;