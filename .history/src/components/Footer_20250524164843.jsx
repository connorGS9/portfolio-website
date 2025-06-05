import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__info">
            <Link to="/" className="footer__logo">
              YourName
            </Link>
            <p className="footer__description">
              A passionate full-stack developer focused on creating intuitive and efficient web applications with modern technologies.
            </p>
            <div className="footer__social">
              <a 
                href="https://github.com/connorGS9" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/connor-smith-6857b22b5/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://x.com/CS2355324" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="X Profile"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="mailto:your.email@example.com" 
                aria-label="Email Contact"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div className="footer__links">
            <div className="footer__links-column">
              <h3 className="footer__links-title">Links</h3>
              <ul className="footer__links-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer__links-column">
              <h3 className="footer__links-title">Services</h3>
              <ul className="footer__links-list">
                <li><a href="#web-development">Web Development</a></li>
                <li><a href="#mobile-development">Mobile Development</a></li>
                <li><a href="#ui-ux-design">UI/UX Design</a></li>
                <li><a href="#consulting">Consulting</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer__newsletter">
            <h3 className="footer__newsletter-title">Stay Updated</h3>
            <p className="footer__newsletter-description">
              Subscribe to my newsletter for the latest updates, articles, and resources.
            </p>
            <form className="footer__newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="footer__newsletter-input"
              />
              <button type="submit" className="footer__newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} YourName. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;