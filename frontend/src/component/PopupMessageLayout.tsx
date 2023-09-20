import { useCallback } from 'react';
import { PopupType, usePopup } from '../context/PopupContext';

import { BiErrorCircle } from "react-icons/bi"
import { BsCheckCircle } from "react-icons/bs"


const PopupMessageLayout = () => {
    const { message } = usePopup()
    const IconElement = useCallback(() => {
        if (!message) return null
        switch (message.type) {
            case PopupType.Error:
                return <BiErrorCircle />
            case PopupType.Success:
                return <BsCheckCircle />
        }
    }, [message])

    if (!message) {
        return null
    }

    return <div className='popup'>
        <IconElement />
        {message.content}
    </div>
}

export default PopupMessageLayout