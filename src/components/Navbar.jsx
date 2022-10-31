import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from "react"
import "../Styles/main.css"
import { Link } from "react-router-dom"

function Navbar () {

    // Esto obtiene la barra de navegacion, es como un Document Selector
    const navRef = useRef()

    // Ahora creamos una funcion para eliminar o agregar una clase. Justamente a (navRef)
    // (navRef.current) basicamente accede a la etiqueta nav, por eso lo llamamos asi antes de agregar la clase, sino solo es un objeto con muchas cosas.

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <>
            <header className="headerTitle">

                <h3>
                    <span className="headerTitle__onePart">ME</span>
                    <span className="headerTitle__secondPart">CAFE</span>
                </h3>

                <nav ref={navRef}>
                    <Link onClick={showNavbar} to="MecafeREACT-DH-Pirello">Dashboard General</Link>
                    <Link onClick={showNavbar} to="/products">Listado Productos</Link>
                    <button onClick={showNavbar} className="nav-btn nav-close-btn headerBtnClose">  {/* Lo ponemos en el boton con el fin de agregar o quitar la clase */}
                        <FaTimes />
                    </button>
                </nav>

                <button onClick={showNavbar} className="nav-btn headerBtnOpen"> {/*Lo ponemoss en el boton con el fin de agregar o quitar la clase */}
                    <FaBars />
                </button>

            </header>
        </>
    )
}

export default Navbar;