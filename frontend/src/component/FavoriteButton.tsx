import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { ICity } from "../services/city.service";

import { MdFavoriteBorder } from "react-icons/md"
import { MdFavorite } from "react-icons/md"

interface IFavoriteButton {
    selectedCity: ICity | null
}

const FavoriteButton = ({ selectedCity }: IFavoriteButton) => {
    const { addFavorite, getFavoriteByKey, removeFavorite } = useUser();
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        if (selectedCity) loadFavorite(selectedCity)
    }, [])

    const loadFavorite = (selectedCity: ICity) => {
        const isFavorite = getFavoriteByKey(selectedCity.cityKey)
        if (isFavorite) setIsFavorite(true)
    }

    const onFavorite = () => {
        if (selectedCity) {
            if (isFavorite) {
                removeFavorite(selectedCity.cityKey)
            } else {
                addFavorite(selectedCity)
            }
        }
    }

    const getTitleValue = () => {
        return isFavorite ? "Remove from favorites" : "Add to favorites"
    }

    return (
        <button className="favorite-button" onClick={onFavorite} title={getTitleValue()}>
            {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
    )
}

export default FavoriteButton