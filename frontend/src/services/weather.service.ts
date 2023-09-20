import { WeatherEP } from "../config/config"
import { AppRequest, httpService } from "./http.service"

export const weatherService = {
    query,
}

export interface IForecast {
    celsiusTemp: string
    weatherText: string
    cityKey: string
}

export async function query(filterBy = {}): Promise<IForecast | null> {
    try {
        const res: AppRequest<IForecast> = await httpService.get(WeatherEP.default, filterBy)
        if (res.status === 'ok') return res.content
        else return null
    } catch (err) {
        throw err
    }
}