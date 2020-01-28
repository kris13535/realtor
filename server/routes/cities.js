var express = require('express');
var router = express.Router();
var { getCities, getCitiesByCountry } = require('../db/cities');

router.get('/', function(req, res, next) {
    getCities()
        .then(cities => res.status(200).json(cities))
        .catch(error => res.status(500).json({ error: error.message }));
});


router.get('/ByCountry/:country', function(req, res, next) {

    getCitiesByCountry(req.params.country)
        .then(cities => res.status(200).json(cities))
        .catch(error => res.status(500).json({ error: error.message }));

});

module.exports = router;