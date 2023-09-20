import { useEffect, useState } from "react"
import { IForecast, weatherService } from "../services/weather.service"
import { ICity } from "../services/city.service"
import Lottie from 'lottie-react';

import SunAnimation from '../assets/animation/sun.json';
import FavoriteButton from "./FavoriteButton";
import { PopupType, usePopup } from "../context/PopupContext";
import DynamicAnimation from "./DynamicAnimation";

interface ICmpForecast {
    selectedCity: ICity | null
}

const Forecast = ({ selectedCity }: ICmpForecast) => {
    const [forecast, setForecast] = useState<IForecast | null>(null)
    const { openPopUp } = usePopup()

    useEffect(() => {
        if (selectedCity) loadWeather(selectedCity)
        else setForecast(null)
    }, [selectedCity])

    const loadWeather = async (selectedCity: ICity) => {
        try {
            const forecast = await weatherService.query({ filterBy: selectedCity.cityKey })
            setForecast(forecast)
        } catch (error: any) {
            openPopUp({ type: PopupType.Error, content: error.message, duration: 2500 })
        }
    }

    return (
        <div className="forecast-section__preview">
            {
                !forecast ?
                    <>
                        <p>Choose city</p>
                    </>
                    :
                    <>
                        <div className="forecast-section__details">
                            <h2>{selectedCity?.localizedName} <span>The weather is {forecast.weatherText}</span></h2>
                            <h2>{forecast.celsiusTemp}&#8451;</h2>
                        </div>
                        <DynamicAnimation temp={forecast.celsiusTemp} />
                        <FavoriteButton selectedCity={selectedCity} />
                    </>
            }
        </div>
    )
}

export default Forecast
