const dbService = require("../../services/db.service")

class Weather {
    celsiusTemp: string
    weatherText: string
    cityKey: string

    constructor(obj: any) {
        this.celsiusTemp = obj.Temperature.Metric.Value
        this.weatherText = obj.WeatherText
        this.cityKey = obj.cityKey
    }

    async save() {
        const query = `INSERT INTO weather (cityKey, celsiusTemp, weatherText) VALUES ('${this.cityKey}', '${this.celsiusTemp}', '${this.weatherText}')`;
        try {
            dbService.runSQL(query)
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Weather

export { }