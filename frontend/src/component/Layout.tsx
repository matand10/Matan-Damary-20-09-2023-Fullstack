import { ReactNode, useState } from "react"
import Navbar from "./Navbar"
import { AiOutlineMenu } from "react-icons/ai"

const Layout = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onOpen = () => {
        setIsOpen(true)
    }

    return (
        <section className="page-container">
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="main-section">
                <div><button className="button-icon__grey fs-1-6" onClick={onOpen}><AiOutlineMenu /></button></div>
                {children}
            </div>
        </section>
    )
}

export default Layout