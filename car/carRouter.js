const router = require('express').Router();
const Cars = require('./carModel.js')
const validateCarPost = require('../middleware/validateCarPost.js')

router.get('/', (req, res) => {
    Cars.getCars()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            console.error('GET error', err)
            res.status(500).json({message: `Error getting cars.`})
        })
})

router.get('/:id', (req, res) => {
    Cars.getCarId(req.params.id)
        .then(car => {
            res.status(200).json(car);
        })
        .catch(err => {
            console.error('GET error', err)
            res.status(500).json({message: `Error getting car ${req.params.id}.`})
        })
})


router.post('/', validateCarPost, (req,res) => {
    const body = req.body;
    Cars.postCar(body)
        .then(newCar => {
            res.status(200).json(newCar);
        })
        .catch(err => {
            console.error('GET error', err)
            res.status(500).json({message: `Error posting new car.`})
        })
})


module.exports = router;