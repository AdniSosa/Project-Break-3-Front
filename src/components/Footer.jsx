import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <h2>CONTACTO</h2>
            <p><strong>Email</strong> contacto@tova.com</p>
            <p><strong>Teléfono</strong> 654 00 00 00</p>
            <p><strong>Dirección</strong> Av. de la Industria 65, 28760 Tres Cantos-Madrid</p>
            <p><strong>Nuestro horario</strong> Lunes a Viernes de 10:00 AM a 8:00 PM</p>

            <h2>INFORMACIÓN</h2>
            <Link to='/inicio'>Quiénes somos</Link>
            <Link to='/contacto'>Contacto</Link>

            <h2>SÍGUENOS</h2>
            <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>

            <a href="https://www.facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>

            <a href="https://wa.me/34654000000" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>

        </footer>
    )
}

export default Footer;