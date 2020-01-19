var express = require('express');
var router = express.Router();
var { getAllapartments, getApartmentById, getLastFourApartments } = require('../db/apartments');

router.get('/', function(req, res, next) {
    getAllapartments(req.query)
        .then(apartments => res.status(200).json({ apartments }))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/fourLastApartmentsBydate', function(req, res, next) {
    getLastFourApartments()
        .then(apartments  => res.status(200).json({apartments}))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/:apartmentId', function(req, res, next) {
    getApartmentById(req.params.apartmentId)
        .then(apartments => res.status(200).json({apartments}))
        .catch(error => res.status(500).json({ error: error.message }));
});


module.exports = router;