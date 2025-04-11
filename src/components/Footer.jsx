import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Footer.module.css';


const Footer = () => {
    return (
        <footer>
            <div className={styles.contenedorprincipal}>
                <div className={styles.contacto}>
                    <h3>CONTACTO</h3>

                    <div className={styles.mail}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                    <span>contacto@tova.com</span>
                    </div>

                    <div className={styles.telefono}>
                    <FontAwesomeIcon icon={faMobile} className={styles.icon} />
                    <span>654 00 00 00</span>
                    </div>

                    <div className={styles.direccion}>
                    <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
                    <span>Av. de la Industria 65, 28760 Tres Cantos-Madrid</span>
                    </div>

                    <div className={styles.horario}>
                    <FontAwesomeIcon icon={faClock} className={styles.icon}/>
                    <span>De lunes a viernes de 10:00h a 20:00h</span>
                    </div>
                </div>

                <div className={styles.informacion}>
                    <h3>INFORMACIÓN</h3>
                    <Link to='/inicio'>Quiénes somos</Link>
                    <Link to='/contacto'>Contacto</Link>
                </div>

                <div className={styles.siguenos}>
                    <h3>SÍGUENOS</h3>
                    <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>

                    <a href="https://www.facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </a>

                    <a href="https://wa.me/34654000000" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;