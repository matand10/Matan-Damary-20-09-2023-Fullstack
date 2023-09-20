import { Request, Response } from 'express'; // Import Express.js types

// Services
const cityService = require('./city.service')

// GET
async function getCities(req: Request, res: Response): Promise<void> {
    try {
        const { filterBy } = req.query
        const weather = await cityService.query(filterBy)
        res.status(200).json({ status: 'ok', content: weather })
    } catch (err) {
        res.status(500).json(err);
        throw err
    }
}

// GET ALL
async function getSavedCities(req: Request, res: Response): Promise<void> {
    try {
        const savedCities = await cityService.getSavedCities()
        res.status(200).json({ status: 'ok', content: savedCities })
    } catch (err) {
        res.status(500).json(err);
    }
}

// POST
async function addCity(req: Request, res: Response): Promise<void> {
    try {
        const city = req.body
        const savedCity = await cityService.add(city)
        res.status(200).json({ status: 'ok', content: savedCity })
    } catch (err) {
        res.status(500).json(err);
    }
}

// DELETE
async function removeCity(req: Request, res: Response): Promise<void> {
    try {
        const idToDelete = req.params.id;
        const savedCity = await cityService.remove(idToDelete)
        res.status(200).json({ status: 'ok', content: savedCity })
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getCities,
    addCity,
    getSavedCities,
    removeCity
}