const express = require('express');
const { getCities, addCity, removeCity, getSavedCities } = require('./city.controller');
const router = express.Router();

router.get('/', getCities);
router.get('/get', getSavedCities);
router.post('/add', addCity);
router.delete('/delete/:id', removeCity);

module.exports = router;
