import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Add animation classes after component mounts
    setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.add('animate-in');
      setTimeout(() => {
        if (subtitleRef.current) subtitleRef.current.classList.add('animate-in');
        setTimeout(() => {
          if (ctaRef.current) ctaRef.current.classList.add('animate-in');
        }, 400);
      }, 400);
    }, 100);

    // Initialize particles animation
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;
      
      // Clear existing particles
      container.innerHTML = '';
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position, size and animation delay
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
      }
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return (
    <section className="home">
      <div className="particles-container" ref={particlesRef}></div>
      
      <div className="hero">
        <h1 ref={titleRef} className="title">
          <span className="highlight">Hello,</span> I'm Connor
        </h1>
        <p ref={subtitleRef} className="subtitle">
        Aspiring Full Stack Developer & Competitive Programmer!
        </p>
        
        <div ref={ctaRef} className="cta-container">
          <Link to="/projects" className="cta-button primary">
            View My Work
          </Link>
          <Link to="/contact" className="cta-button secondary">
            Contact Me
          </Link>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
      
      <div className="featured-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="featured-grid">
          {/* You can map through featured projects here */}
          <div className="featured-item">
            <div className="featured-image">
              <div className="image-placeholder"></div>
            </div>
            <h3>Heart Disease Predictor</h3>
            <p>Using the Google forms API and a machine learning model trained on a CSV of 50,000 heart disease records, I created an application that allows users to predict the likelihood of heart disease based on their responses on a Google Form.</p>
            <Link to="/projects" className="featured-link">
              View Details
            </Link> 
          </div>
          
          <div className="featured-item">
            <div className="featured-image">
              <div className="image-placeholder"></div>
            </div>
            <h3>Projkect 2  Title</h3>
            <p>Short description of the project and technologies used.</p>
            <Link to="/projects" className="featured-link">
              View Details
            </Link>
          </div>
        </div>
      </div>
      
      <div className="skills-section">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>VS Code</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;