import { ICity } from "../services/city.service"

interface ICmpCity {
    city: ICity
    onCity: (city: ICity) => void
    selectedCity: ICity | undefined | null
}

const City = ({ city, onCity, selectedCity }: ICmpCity) => {
    return (
        <li onClick={() => onCity(city)} className={`cities-section__item${selectedCity?.cityKey === city.cityKey ? " active" : ""}`}>
            <p>{city.localizedName}</p>
        </li>
    )
}

export default City