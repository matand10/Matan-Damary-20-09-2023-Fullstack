import { useState } from "react"
import { ICity } from "../services/city.service"

// Pages
import Forecast from "../component/Forecast"
import AutoComplete from "../component/AutoComplete"
import CitiesSearch from "../component/CitiesSearch"


const Homepage = () => {
    const [selectedCity, setSelectedCity] = useState<ICity | null>(null)

    const onCity = (city: ICity) => {
        setSelectedCity(city)
    }

    return (
        <>
            <div className="forecast-section">
                <AutoComplete />
                <Forecast selectedCity={selectedCity} />
            </div>
            <CitiesSearch onCity={onCity} />
        </>
    )
}
export default Homepage