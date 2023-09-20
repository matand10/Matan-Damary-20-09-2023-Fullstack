import { Request, Response } from 'express'

// Services
const weatherService = require('./weather.service')

// GET
async function getWeather(req: Request, res: Response): Promise<void> {
    try {
        const { filterBy } = req.query
        const weather = await weatherService.query(filterBy)
        res.status(200).json({ status: 'ok', content: weather })
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getWeather
}