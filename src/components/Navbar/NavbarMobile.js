// import { useState } from 'react';
// import NavbarMenu from './Navbar/NavbarMobile';
// import { MdMenu } from 'react-icons/md';


// const NavbarMobile = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <div>
//             {/* Ícone de hambúrguer */}
//             <div className="mobile-menu" onClick={toggleMenu}>
//                 <MdMenu className="hamburger-icon" />
//             </div>

//             {/* Menu suspenso */}
//             <ul className={`navbar-menu ${menuOpen ? 'menu-open' : ''}`}>
//                 {NavbarMenu.map((item) => (
//                     <li key={item.id} className="navbar-item">
//                         <a href={item.link} className="navbar-link">
//                             {item.title}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default NavbarMobile;
