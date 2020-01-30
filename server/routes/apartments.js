var express = require('express');
var multer = require('multer');
var router = express.Router();
var { getAllapartments, getApartmentById, getLastFourApartments,
     addApartment, newImagesNewApartnemt, getMyapartments, deleteApartment,
      getApartmentsLength, getPropertyTypeData, getLastFourSydneyApartments } = require('../db/apartments');

let time = Date.now();

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'public/images/apartment',)
    },
    filename:function(req,file,cb){
        cb(null, "img"+time+file.originalname)
    }
});

const upload = multer({storage:storage});


router.get('/', function(req, res, next) {
    getAllapartments(req.query)
        .then(apartments => res.status(200).json({ apartments }))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/length', function(req, res, next) {
    getApartmentsLength()
        .then(length => res.status(200).json({ length }))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/fourLastApartmentsBydate', function(req, res, next) {
    getLastFourApartments()
        .then(apartments  => res.status(200).json({apartments}))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/getLastFourSydneyApartments', function(req, res, next) {
    getLastFourSydneyApartments()
        .then(apartments  => res.status(200).json({apartments}))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/:apartmentId', function(req, res, next) {
    getApartmentById(req.params.apartmentId)
        .then(apartments => res.status(200).json({apartments}))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/property/Type/Data', function(req, res, next) {
    getPropertyTypeData()
        .then(PropertyTypeData => res.status(200).json({PropertyTypeData}))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/my/apartments', function(req, res, next) {
    const user = JSON.parse(req.cookies.login_user);
    getMyapartments(user[0].email)
        .then(apartments => res.status(200).json({ apartments }))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.post('/deleteApartment', function(req, res, next) {
    deleteApartment(req.body.apartmentId)
        .then(apartment => res.status(200).json({ apartment }))
        .catch(error => res.status(500).json({ error: error.message }));
});


router.post('/addApartment',upload.array('images'),async function(req,res,next){
    try{
        const main_image = req.files[0].destination + req.files[0].originalname;
        req.body.main_image = main_image;
        const newApartment = await addApartment(req.body);
        const newImages = await newImagesNewApartnemt(newApartment, req.files);
        res.status(201).json({newImages});
    }catch(error){
        throw new Error(`posting apartment failed with ${error.message}`)
    }
});


module.exports = router;