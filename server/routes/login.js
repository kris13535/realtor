var express = require('express');
var router = express.Router();
var { getUser } = require('../db/login')

router.post('/', function(req, res, next) {
    getUser(req.body)
        .then(user => {
            if (user.length === 1){
                console.log();
                res.cookie("login_user",user, {maxAge:1000*60*60*24,httpOnly:false,secure:false})
                .status(200).json(user)           
            }
            else{
                res.status(401).json({status: 401, message: "user dose not exist"});
            }
        })
        .catch(error => res.status(401).json({ error: error.message }));
});

module.exports = router;