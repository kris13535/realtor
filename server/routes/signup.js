var express = require('express');
var router = express.Router();
var {testingIfUserExisting, createNewUser } = require('../db/signup')

router.post('/', function(req, res, next) {
    testingIfUserExisting(req.body.email)
        .then(user => {
            if (user.length === 1){
                res.status(401).json({status: 401, message: "user olredy exist"});
            }
            else{
               createNewUser(req.body)
                .then(user => res.status(200).json({ user }))
                .catch(error => res.status(500).json({ error: error.message }));
            }
        })
        .catch(error => res.status(500).json({ error: error.message }));
});

module.exports = router;