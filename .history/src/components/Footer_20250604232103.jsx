import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer dark-theme">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__info">
            <Link to="/" className="footer__logo">
              Connor Smith
            </Link>
            <p className="footer__description">
              A passionate backend developer focused on creating robust and efficient server-side systems with modern technologies!
            </p>
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
              <h3 className="footer__links-title">Other Sites</h3>
              <ul className="footer__links-list">
                <li>
                  <a href="/blog" className="construction-link">
                    <div className="construction-content">
                      <span className="site-name">Tech Blog</span>
                      <span className="construction-badge">In Construction</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/fun" className="construction-link">
                    <div className="construction-content">
                      <span className="site-name">Fun Website</span>
                      <span className="construction-badge">In Construction</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer__newsletter">
            <h3 className="footer__newsletter-title">Weekly Newsletter</h3>
            <p className="footer__newsletter-description">
              Join my Sunday newsletter where I share what I learned this week - a mix of life skills and development knowledge. 
              Get insights into my journey as a developer and personal growth experiences.
            </p>
            <form className="footer__newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="footer__newsletter-input"
              />
              <button type="submit" className="footer__newsletter-button">
                Subscribe to Sunday Updates
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Connor Smith. All rights reserved.
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