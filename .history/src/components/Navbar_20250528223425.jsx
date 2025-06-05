import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <button 
          onClick={handleHomeClick}
          className="navbar__logo"
        >
          <span className="logo-text">Connor</span>
        </button>
        
        <button 
          className={`navbar__toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
        
        <nav className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__nav">
            <li className="navbar__nav-item">
              <button 
                onClick={handleHomeClick}
                className="navbar__nav-link"
              >
                Home
              </button>
            </li>
            <li className="navbar__nav-item">
              <button 
                onClick={() => scrollToSection('about')}
                className="navbar__nav-link"
              >
                About
              </button>
            </li>
            <li className="navbar__nav-item">
              <button 
                onClick={() => scrollToSection('projects')}
                className="navbar__nav-link"
              >
                Projects
              </button>
            </li>
            <li className="navbar__nav-item">
              <button 
                onClick={() => scrollToSection('contact')}
                className="navbar__nav-link"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="navbar__social">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Twitter Profile"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;