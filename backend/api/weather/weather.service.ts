import axios, { AxiosResponse } from "axios"

const Weather = require("./weather.model")
const dbService = require("../../services/db.service")

async function query(filterBy: string): Promise<typeof Weather> {
    try {
        let query = `SELECT * FROM weather WHERE weather.cityKey LIKE '%${filterBy}%'`;
        const data = await dbService.runSQL(query)
        if (data.length) return data[0]
        else {
            const res = await _getForecast(filterBy)
            const forecast = new Weather({ ...res[0], cityKey: filterBy })
            forecast.save()
            return forecast
        }
    } catch (err) {
        throw err
    }
}

const _getForecast = async (key: string, period: string = '', range: string = ''): Promise<Array<any>> => {
    try {
        const baseUrl = `${process.env.ACCU_API}${period}/${range}`
        const query = `${key}?apikey=${process.env.API_KEY}`
        const res: AxiosResponse = await axios.get(baseUrl + query)
        return res.data
    } catch (err) {
        throw err
    }
}

module.exports = {
    Weather,
    query,
}