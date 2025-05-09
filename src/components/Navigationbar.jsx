import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'; // Changed from Link to NavLink
import { mindfull } from '../assets/img/logos';
import "./../assets/css/navigationbar.css";
const wordArray = ['uiux', 'branding', 'digital marketing'];

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [currWord, setCurrWord] = useState(wordArray[0]);
  const index = useRef(0);
	useEffect(() => {
		const interval = setInterval(() => {
      index.current = (index.current + 1) % wordArray.length;
      setCurrWord(wordArray[index.current]);

			}, 1000);
		return () => clearInterval(interval);
  }, []);
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <NavLink to="/" className="logo-text">
          <img src={mindfull} alt="Logo" width={50}  />  <span className="word-cycler">.  {currWord}</span>
        </NavLink>
      </div>
      
      {/* Desktop Navigation */}
      <div className="navbar-links">
        <NavLink 
          to="/"
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : ''}`}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : ''}`} >
          About Us
        </NavLink>
        <NavLink 
          to="/services" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : ''}`}  >
          Services
        </NavLink>
        <NavLink  target="_blank" rel="noreferrer"
          to="https://forms.gle/qXoQAAMGpcKFcieB9" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : ''}`}
        >
          Careers
        </NavLink>
<NavLink to="/contactus">
        <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded-xl">
  Get Started
</button>
</NavLink>
      </div>
      <div className="navbar-mobile-menu">
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav-links">
          <NavLink to="/"   className={({ isActive }) => 
            `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about"   className={({ isActive }) => 
            `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`} onClick={toggleMenu}>About Us</NavLink>
          <NavLink to="/services"   className={({ isActive }) => 
            `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`} onClick={toggleMenu}>Services</NavLink>
          <NavLink to="https://forms.gle/qXoQAAMGpcKFcieB9"  target="_blank" rel="noreferrer" className={({ isActive }) => 
            `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`} onClick={toggleMenu}>Careers</NavLink>
        </div>
      )}
    </nav>

  );
};

export default Navigationbar;