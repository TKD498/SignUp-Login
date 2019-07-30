const User = require('../models/users');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.post('/', (req, res)=>{
    let emailB = req.body.email,
        pwd = req.body.pwd;

        User.findOne({email : emailB}, (err, user)=>{
            if(err) throw err;
            bcrypt.compare(pwd, user.pwd, (err, resp)=>{
                if(err) throw err;
                else if(resp){ res.send('{Password : Found!!!}') }
                else{res.send('{Password : Not found}')}
            });
        });
});

module.exports = router;