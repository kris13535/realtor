var express = require('express');
var router = express.Router();
var { getcities } = require('../db/cities');

router.get('/', function(req, res, next) {
    getcities()
        .then(cities => res.status(200).json(cities))
        .catch(error => res.status(500).json({ error: error.message }));
});

module.exports = router;