var express = require('express');
var multer = require('multer')
var router = express.Router();
var { getAllapartments, getApartmentById, getLastFourApartments } = require('../db/apartments');

const storage = multer.diskStorage({
    destination: 'images/apartment/',
    filename:function(req,file,CDfunction){
        CDfunction(null, file.originalname)
    }
});
const upload = multer({storage:storage});

router.get('/', function(req, res, next) {
    console.log(req.query)
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


router.post('/addApartment',upload.single('main_image'), async function(req,res,next){
    try{
        console.log("ffffffffffffffff", req.file.destination);
        const main_image = req.file.destination+req.file.originalname;
        delete req.params.main_image;
        req.params.main_image = main_image;
        const newApartment = await addApartment(req.params);
        res.status(201).json({id: newApartment});
    }catch(error){
        throw new Error(`posting apartment failed with ${error.message}`)
    }
});





module.exports = router;