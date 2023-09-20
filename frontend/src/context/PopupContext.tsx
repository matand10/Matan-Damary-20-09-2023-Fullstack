import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";


export enum PopupType {
    Error, Success
}

export interface PopupMessage {
    type: PopupType
    duration: number
    content: string
}

type IPopUpContext = {
    message: PopupMessage | undefined
    openPopUp: (message: PopupMessage) => void
    closeUpUp: () => void
}

const PopUpContext = createContext<IPopUpContext | null>(null)
export const usePopup = () => {
    const context = useContext<IPopUpContext | null>(PopUpContext)
    if (!context) {
        throw Error("Popup context was not provided!")
    }
    return context
}

export const PopUpContextProvider = ({ children }: { children: ReactNode }) => {
    const [message, setMessage] = useState<PopupMessage | undefined>()

    const openPopUp = (message: PopupMessage) => {
        setMessage(message)
        setTimeout(closeUpUp, message.duration)
    }

    const closeUpUp = () => {
        setMessage(undefined)
    }

    return (
        <PopUpContext.Provider value={{ message, openPopUp, closeUpUp }}>
            {children}
        </PopUpContext.Provider>
    )
}