import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from "react"
import "../Styles/main.css"
import { Link, useLocation } from "react-router-dom"

function Navbar () {
    const location = useLocation();
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const isActive = (path) => {
        if (path === "/MecafeREACT-DH-Pirello") {
            return location.pathname === "/MecafeREACT-DH-Pirello" || location.pathname === "/"
        }
        return location.pathname === path
    }

    return (
        <>
            <header>

                <h3 className="headerTitle">
                    <span className="headerTitle__onePart">ME</span>
                    <span className="headerTitle__secondPart">CAFE</span>
                </h3>

                <nav ref={navRef}>
                    <Link
                        className={isActive("/MecafeREACT-DH-Pirello") ? "active" : ""}
                        onClick={showNavbar}
                        to="/MecafeREACT-DH-Pirello"
                    >
                        Dashboard General
                    </Link>
                    <Link
                        className={isActive("/products") ? "active" : ""}
                        onClick={showNavbar}
                        to="/products"
                    >
                        Listado Productos
                    </Link>
                    <button onClick={showNavbar} className="nav-btn nav-close-btn">
                        <FaTimes />
                    </button>
                </nav>

                <button onClick={showNavbar} className="nav-btn">
                    <FaBars />
                </button>

            </header>
        </>
    )
}

export default Navbar;