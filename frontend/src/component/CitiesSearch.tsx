import { useEffect, useState } from "react"
import { ICity, cityService } from "../services/city.service"
import { useSearchParams } from "react-router-dom"

import Loader from "./Loader"
import Cities from "./Cities"
import { PopupType, usePopup } from "../context/PopupContext"

interface ICities {
    onCity?: (city: ICity) => void
}

const CitiesSearch = ({ onCity }: ICities) => {
    const [cities, setCities] = useState<Array<ICity>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [params] = useSearchParams();
    const { openPopUp } = usePopup()

    useEffect(() => {
        const query = params.get('q')
        if (query) loadCities(query)
    }, [params.get('q')])

    const loadCities = async (query: string) => {
        try {
            setLoading(true)
            const cities = await cityService.query(query)
            setCities(cities)
        } catch (error: any) {
            openPopUp({ type: PopupType.Error, content: error.message, duration: 2500 })
        } finally {
            setLoading(false)
        }
    }

    const handleClick = (city: ICity) => {
        if (onCity) onCity(city)
    }

    return loading ? <Loader /> : <Cities cities={cities} handleClick={handleClick} />
}

export default CitiesSearch