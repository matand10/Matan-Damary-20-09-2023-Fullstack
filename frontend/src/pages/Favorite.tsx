import { useEffect, useState } from "react"

import Cities from "../component/Cities"
import Forecast from "../component/Forecast"
import { useUser } from "../context/UserContext"
import { ICity, cityService } from "../services/city.service"


const Favorite = () => {
    const { favorites, setFavorite } = useUser()
    const [selectedCity, setSelectedCity] = useState<ICity | null>(null)

    useEffect(() => {
        if (!favorites) loadFavorites()
        else {
            setSelectedCity(favorites[0])
        }
    }, [favorites])

    const loadFavorites = async () => {
        try {
            const savedCities = await cityService.getSavedCities()
            setFavorite(savedCities)
            setSelectedCity(savedCities.length ? savedCities[0] : null)
        } catch (error) {
            console.log('error', error)
        }
    }

    const onCity = (city: ICity) => {
        setSelectedCity(city)
    }

    return (
        <>
            <Forecast selectedCity={selectedCity} />
            <Cities cities={favorites} handleClick={onCity} selectedCity={selectedCity} />
        </>
    )
}



export default Favorite