var express = require('express');
var multer = require('multer');
var router = express.Router();
var { getAllapartments, getApartmentById, getLastFourApartments, addApartment, newImagesNewApartnemt } = require('../db/apartments');

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


router.post('/addApartment',upload.array('images'),async function(req,res,next){
    try{
        
        // console.log("ffffffffffffffff", req.files.destination);
        console.log(req.body);
        console.log(req.files);
    
        const main_image = req.files[0].destination + req.files[0].originalname;
        console.log(main_image);
        req.body.main_image = main_image;
        // console.log(req.body);
        const newApartment = await addApartment(req.body);
        const newImages = await newImagesNewApartnemt(newApartment, req.files);
        res.status(201).json({newImages});
    }catch(error){
        throw new Error(`posting apartment failed with ${error.message}`)
    }
});


module.exports = router;