import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';
import BackgroundAnimation from './components/BackgroundAnimation';
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Router>
      <div className="app">
        {isLoading ? (
          <div className="loader">
            <div className="loader-content">
              <div className="loader-circle"></div>
              <h2>Loading...</h2>
            </div>
          </div>
        ) : (
          <>
            <AnimatedCursor />
            <BackgroundAnimation />
            <Navbar />
            <main>
              <Home />
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;