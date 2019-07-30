const userModel = require('../models/users')
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>{

    const user = new userModel(req.body);
    bcrypt.hash(req.body.pwd, 10, function(err, hash) {
        if(err) throw err;
        user.pwd = hash;
        user.save((err, data)=>{
            if(err) throw err;
            res.json(data)
        });
    });
});

module.exports = router;