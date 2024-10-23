import { useState} from 'react';
import { NavLink } from 'react-router-dom';
import TopCTA from './TopCTA';
import hamburger from '../../assets/svg/hamburger.svg';
import close from '../../assets/svg/close.svg';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);
  
  return (
    <header>
      <TopCTA />
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <NavLink to="/" exact activeClassName="active">
              <img src='https://img1.wsimg.com/isteam/ip/091c9fa2-5c18-4a0c-b931-2d17c18ffb2c/blob.png' alt="Mineral Logo" className="logo" />
            </NavLink>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src={!isOpen ? hamburger : close} alt="Menu" />
          </button>
          <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <NavLink target='_blank' rel='noreferrer' to="https://go.orasempreannapolis.com/widget/service-menus/orasempre-main-menu" activeClassName="active" onClick={closeMenu}>
              Book a Facial
            </NavLink>
            <NavLink to="/collections" activeClassName="active" onClick={closeMenu}>
              Skincare
            </NavLink>
            <NavLink to="/technology" activeClassName="active" onClick={closeMenu}>
              Technology
            </NavLink>
            <NavLink to="/treatments" activeClassName="active" onClick={closeMenu}>
              Treatments
            </NavLink>
            <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
              About
            </NavLink>
          </nav>
          <div className={`navbar-profile ${isOpen ? 'open-inline' : ''}`}>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
