import { CityEP } from "../config/config"
import { AppRequest, httpService } from "./http.service"

export const cityService = {
    query,
    add,
    getSavedCities,
    remove,
}

// Model
export interface ICity {
    cityKey: string
    localizedName: string
}

// Query
export async function query(query: string): Promise<Array<ICity>> {
    try {
        const res: AppRequest<Array<ICity>> = await httpService.get(CityEP.default, { filterBy: query })
        return res.content
    } catch (err) {
        throw err
    }
}

// Get All
export async function getSavedCities(): Promise<Array<ICity>> {
    try {
        const res: AppRequest<Array<ICity>> = await httpService.get(CityEP.get, {})
        return res.content
    } catch (err) {
        throw err
    }
}

// Add
export async function add(city: ICity): Promise<ICity> {
    try {
        const res: AppRequest<ICity> = await httpService.post(CityEP.add, city)
        return res.content
    } catch (err) {
        throw err
    }
}

// Remove
export async function remove(cityKey: string): Promise<string> {
    try {
        const res: AppRequest<string> = await httpService.delete(CityEP.delete + cityKey, null)
        return res.content
    } catch (err) {
        throw err
    }
}