import { FaTwitter } from "react-icons/fa"


function Footer () {

    return (

        <footer className="newFooter">
            
            <section className="newFooter__container">

                <div className="newFooter__desktop">
                    <h4>
                        <span>DASHBOARD DE ME</span>
                        <span className="newFooter__titleSpan">CAFE</span>
                    </h4>
                    <p>Mecafe no solo se trata de una tienda online, tambien llevamos nuestras analiticas para poder conocer bien cada movimiento realizado, somos perfeccionistas al maximo y eso lo demostramos con nuestro dashboard.</p>
                </div>

                <div className="newFooter__box">

                    <div className="newFooter__itemsBox">
                        <h4>INFORMACION</h4>
                        <p>Blog</p>
                        <p>Recetas</p>
                        <p>Historia</p>
                    </div>
            
                    <div className="newFooter__itemsBox">
                        <h4>LINKS</h4> 
                        <p>Whatsapp</p>
                        <p>Contacto</p>
                        <p>mecafe@gmail.com</p>
                    </div>
            
                    <div className="newFooter__itemsBox">
                        <h4>SOCIAL</h4>
                        <p><FaTwitter className="Twitter" /> Twitter</p>
                        <p>Instagram</p>
                        <p>GitHub</p>
                    </div>

                </div>

            </section>
              
        </footer>

    )

}

export default Footer;