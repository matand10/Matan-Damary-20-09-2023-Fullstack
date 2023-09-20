import { NavLink } from "react-router-dom"
import { ConstRoutes } from "../constants/routes"

import { TiWeatherPartlySunny } from "react-icons/ti"
import { GiSaveArrow } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

interface INavbar {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

const Navbar = ({ isOpen, setIsOpen }: INavbar) => {
    const getActiveLink = (isActive: boolean): string => {
        return isActive ? "navbar-wrapper__item active" : "navbar-wrapper__item"
    }

    const onLink = () => {
        if (isOpen) setIsOpen(false)
    }

    const links = [
        { name: 'Weather', url: ConstRoutes.HOMEPAGE, icon: TiWeatherPartlySunny },
        { name: 'Favorites', url: ConstRoutes.FAVORITES, icon: GiSaveArrow }
    ]

    return (
        <section className={`navbar-section${isOpen ? "show" : ""}`}>
            <div className="navbar-wrapper">
                <ul className="navbar-wrapper__list">
                    {
                        links.map(link => {
                            return (
                                <NavLink key={link.name} to={link.url} className={({ isActive }) => getActiveLink(isActive)} onClick={onLink}>
                                    <link.icon />
                                    <p>{link.name}</p>
                                </NavLink>
                            )
                        })
                    }
                </ul>
                {
                    isOpen &&
                    <button className="button-icon__grey fs-1-6" onClick={() => setIsOpen(false)}>
                        <AiOutlineClose />
                    </button>
                }
            </div>
        </section>
    )
}

export default Navbar