import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavbarMenu from "../../components/Menu";
import Logo from "../../assets/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag, MdMenu } from "react-icons/md";
import "./Navbar.css";

const appearLeft = {
    hidden: {
        opacity: 0,
        x: -200,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 869);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 870);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <img src={Logo} alt="Logo" className="navbar-logo-image" />
                </div>

                {/* Menu para telas grandes */}
                {!isMobile && (
                    <ul className="navbar-menu">
                        {NavbarMenu.map((item) => (
                            <li key={item.id} className="navbar-item">
                                <a href={item.link} className="navbar-link">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="icons-container">
                    {/* Ícones */}
                    <div className="navbar-icons">
                        <div className="icon user-icon">
                            <FaRegUserCircle />
                        </div>
                        <div className="icon cart-icon">
                            <MdOutlineShoppingBag />
                            <div className="cart-count">2</div>
                        </div>
                    </div>
                    

                    {/* Menu hambúrguer para telas pequenas */}
                    {isMobile && (
                        <>
                            <motion.ul
                                className={`navbar-menu mobile ${menuOpen ? 'menu-open' : ''}`}
                                initial="hidden"
                                animate={menuOpen ? "show" : "hidden"}
                                variants={appearLeft}
                            >
                                {NavbarMenu.map((item) => (
                                    <li key={item.id} className="navbar-item">
                                        <a href={item.link} className="navbar-link">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                            <div className="mobile-menu" onClick={toggleMenu}>
                                <MdMenu className="hamburger-icon" />
                            </div>
                        </>
                    )}
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;