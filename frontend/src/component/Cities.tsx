import { ICity } from "../services/city.service"
import City from "./City"
import Loader from "./Loader"

interface ICities {
    cities: Array<ICity> | null
    handleClick: (item: ICity) => void
    loading?: boolean
    selectedCity?: ICity | null
}

const Cities = ({ cities, handleClick, loading = false, selectedCity }: ICities) => {
    return (
        <section className="cities-section">
            <h3>Cities</h3>
            <ul className="cities-section__list">
                {loading ?
                    <Loader />
                    :
                    cities && cities.map(city => {
                        return (
                            <City key={city.cityKey} city={city} onCity={handleClick} selectedCity={selectedCity} />
                        )
                    })
                }
            </ul>
        </section>
    )
}
export default Cities