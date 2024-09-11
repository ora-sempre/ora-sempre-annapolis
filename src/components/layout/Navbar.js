import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import TopCTA from './TopCTA';
import hamburger from '../../assets/svg/hamburger.svg';
import close from '../../assets/svg/close.svg';

const Navbar = () => {
  // eslint-disable-next-line
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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
            <NavLink to="/" activeClassName="active">
              Book a Facial
            </NavLink>
            <NavLink to="/collections" activeClassName="active">
              Skincare
            </NavLink>
            <NavLink to="/technology" activeClassName="active">
              Technology
            </NavLink>
            <NavLink to="/treatments" activeClassName="active">
              Treatments
            </NavLink>
            <NavLink to="/about" activeClassName="active">
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
