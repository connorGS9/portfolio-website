import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import profileImage from '../pic_of_me.jpg';

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef(null);
  const projectsParticlesRef = useRef(null);
  const contactParticlesRef = useRef(null);

  const createParticles = (container) => {
    if (!container) return;
    
    //Clear existing particles
    container.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      //Random position, size and animation delay
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

  useEffect(() => {
    //Add animation classes after component mounts
    setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.add('animate-in');
      setTimeout(() => {
        if (subtitleRef.current) subtitleRef.current.classList.add('animate-in');
        setTimeout(() => {
          if (ctaRef.current) ctaRef.current.classList.add('animate-in');
        }, 400);
      }, 400);
    }, 100);

    //Initialize particles for all sections
    const initializeParticles = () => {
      createParticles(particlesRef.current);
      createParticles(projectsParticlesRef.current);
      createParticles(contactParticlesRef.current);
    };

    initializeParticles();
    window.addEventListener('resize', initializeParticles);
    
    return () => {
      window.removeEventListener('resize', initializeParticles);
    };
  }, []);

  return (
    <section className="home">
      {/* Hero/About Section */}
      <div className="particles-container" ref={particlesRef}></div>
      <div id="about" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 ref={titleRef} className="title">
              <span className="highlight">Hello,</span> I'm Connor
            </h1>
            <p ref={subtitleRef} className="subtitle">
              Aspiring Backend Software Engineer & Competitive Programmer!
            </p>
            <div ref={ctaRef} className="about-text">
              <p>
                I'm a practicing backend developer with a special interest in building robust server-side systems 
                and solving complex programming challenges. My journey in software development combines 
                practical experience with competitive programming, allowing me to approach problems 
                with both creativity and analytical thinking.
              </p>
              <p>
                When I'm not working on projects, you can find me participating in competitive programming contests,
                going to the gym, or doing almost anything outdoors. I believe in writing clean, 
                efficient code and creating user-friendly applications that make a real impact.
              </p>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src={profileImage} alt="Connor" className="profile-image" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
      
      {/* Projects Section */}
      <div id="projects" className="featured-section">
        <div className="particles-container" ref={projectsParticlesRef}></div>
        <h2 className="section-title">Featured Projects</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <div className="featured-tech">
              <div className="tech-icons">
                <i className="fab fa-python" title="Python"></i>
                <i className="fas fa-database" title="Pandas"></i>
                <i className="fas fa-chart-line" title="NumPy"></i>
                <i className="fas fa-brain" title="Machine Learning"></i>
                <i className="fab fa-google" title="Google Forms API"></i>
              </div>
            </div>
            <h3>Heart Disease Predictor</h3>
            <p>Using the Google forms API and a machine learning model trained on a CSV of 50,000 heart disease records, I created an application that allows users to predict the likelihood of heart disease based on their responses on a Google Form.</p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="featured-link"
            >
              View Details
            </button> 
          </div>
          
          <div className="featured-item">
            <div className="featured-tech">
              <div className="tech-icons">
                <i className="fab fa-java" title="Java"></i>
                <i className="fab fa-android" title="Android Studio"></i>
                <i className="fas fa-code" title="XML"></i>
              </div>
            </div>
            <h3>Tile Moving Game on Android</h3>
            <p>A game where you can move tiles around to solve a puzzle. I made this on Android Studio using Java.</p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="featured-link"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="skills-section">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-info">
                  <span>Python</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Java</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Node.js</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>SQL</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Data Science</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-info">
                  <span>NumPy</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Pandas</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Scikit-learn</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>TensorFlow</span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-info">
                  <span>Git</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Docker</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Linux</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>AWS</span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section">
        <div className="particles-container" ref={contactParticlesRef}></div>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out to me for any opportunities or just to say hello!</p>
            <div className="contact-links">
              <a href="mailto:connorgsmith2020@gmail.com" className="contact-link">
                <i className="fas fa-envelope"></i> your.email@example.com
              </a>
              <a href="https://github.com/connorgs9" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/connor-smith-6857b22b5/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://x.com/CS2355324" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;