import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css"
import Logo from "../../assets/logo.svg";

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="navbar-logo-footer">
                <img src={Logo} alt="Logo" className="navbar-logo-image" />
            </div>

            <div className="map-site">
                <div className="map-site-footer">
                <div className="title-map">Menu</div>
                    <a href="/">Lançamento</a>
                    <a href="#">Masculino</a>
                    <a href="#">Feminino</a>
                    <a href="#">Infantil</a>
                </div>

                <div className="importants-links">
                <div className="title-map">Links</div>
                    <div className="importants-links-footer">
                        <a href="#">Sobre nós</a>
                        <a href="#">Promoções</a>
                        <a href="#">Categorias</a>
                        <a href="#">Parceiros</a>
                    </div>
                </div>

                <div className="suport">
                <div className="title-map">Suporte</div>
                    <div className="suport-footer">
                    <a href="#">Central de atendimento</a>
                        <a href="#">FAQ</a>
                        <a href="#">Termos de uso</a>
                        <a href="#">Privacidade</a>
                        
                        <a href="#">Política de Trocas</a>
                    </div>
                </div>
            </div>
            
            <div className="footer-icons">
                <div className="footer-social">
                    <a href="https://facebook.com" id="face" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" id="insta" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com" id="twit" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </div>
                
                <div className="btn-footer">
                    <button className="btn-contact-footer">Contato</button>
                </div>
            </div>
            
            
        </div>
    )   
}

export default Footer;
