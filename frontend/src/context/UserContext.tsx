import { createContext, useContext, useState } from "react"
import { ICity, cityService } from "../services/city.service";
import { PopupType, usePopup } from "./PopupContext";

type UserContextValue = {
    favorites: Array<ICity> | null
    addFavorite: (favorite: ICity) => void;
    setFavorite: (favorite: Array<ICity>) => void;
    getFavoriteByKey: (key: string) => ICity | void;
    removeFavorite: (key: string) => void;
}

const defaultValue = {
    favorites: null,
    addFavorite: (favorite: ICity) => { },
    setFavorite: (favorite: Array<ICity>) => { },
    getFavoriteByKey: (key: string) => { },
    removeFavorite: (cityKey: string) => { },
}

export const UserContext = createContext<UserContextValue>(defaultValue);
export const useUser = () => (
    useContext(UserContext)
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const { openPopUp } = usePopup()
    const [favorites, setFavorites] = useState<Array<ICity> | null>(null);

    const setFavorite = (cities: Array<ICity>) => {
        setFavorites(cities)
    }

    const addFavorite = async (favorite: ICity): Promise<void> => {
        try {
            const city = await cityService.add(favorite)
            setFavorites(prevState => ([city, ...prevState || []]))
        } catch (error: any) {
            openPopUp({ type: PopupType.Error, content: error.message, duration: 2500 })
        }
    }

    const removeFavorite = async (cityKey: string) => {
        try {
            const id = await cityService.remove(cityKey)
            setFavorites((prevState) => prevState!.filter(city => city.cityKey !== id))
        } catch (error: any) {
            openPopUp({ type: PopupType.Error, content: error.message, duration: 2500 })
        }
    }

    const getFavoriteByKey = (key: string) => {
        if (favorites) {
            return favorites.find(currentFavorite => currentFavorite.cityKey === key)
        }
    }

    const contextValue = {
        favorites,
        addFavorite,
        setFavorite,
        getFavoriteByKey,
        removeFavorite,
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}