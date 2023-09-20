import axios, { AxiosResponse } from "axios"
const City = require("./city.model")

async function query(filterBy: string): Promise<Array<typeof City>> {
    try {
        console.log('filterBy', filterBy)
        const res = await _getCity(filterBy)
        return res.map((currentCity: any) => new City(currentCity.Key, currentCity.AdministrativeArea.LocalizedName))
    } catch (err) {
        throw err
    }
}

async function getSavedCities(): Promise<Array<typeof City>> {
    try {
        const cities = await City.getAll()
        return cities
    } catch (err) {
        throw err
    }
}

async function add(entity: typeof City): Promise<typeof City> {
    try {
        const entityToAdd: typeof City = new City(entity.cityKey, entity.localizedName)
        entityToAdd.save()
        return entityToAdd
    } catch (err) {
        throw err
    }
}

async function remove(id: string): Promise<string> {
    try {
        const deletedId: string = await City.remove(id)
        return deletedId
    } catch (err) {
        throw err
    }
}

const _getCity = async (city = 'tel aviv') => {
    try {
        const query = `?apikey=${process.env.API_KEY}&q=${city}`
        const res: AxiosResponse = await axios.get(process.env.ACCU_AUTOCOMPLETE_API + query)
        console.log('res', res)
        return res.data
    } catch (err) {
        throw err
    }
}


module.exports = {
    query,
    add,
    remove,
    getSavedCities,
}