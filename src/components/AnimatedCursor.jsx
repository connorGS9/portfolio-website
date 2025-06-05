import React, { useEffect, useState, useRef } from 'react';
import '../styles/AnimatedCursor.css';

const AnimatedCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;
    
    const onMouseMove = (e) => {
      const clientX = e.clientX;
      const clientY = e.clientY;
      
      // Position the outer cursor with a slight delay for the trailing effect
      const setPos = () => {
        cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      };
      
      // Position the inner dot immediately
      cursorDot.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      
      requestAnimationFrame(setPos);
      
      if (!isVisible) {
        setIsVisible(true);
        cursor.style.opacity = 1;
        cursorDot.style.opacity = 1;
      }
    };
    
    const onMouseDown = () => {
      setIsClicked(true);
    };
    
    const onMouseUp = () => {
      setIsClicked(false);
    };
    
    const onMouseLeave = () => {
      setIsVisible(false);
      cursor.style.opacity = 0;
      cursorDot.style.opacity = 0;
    };
    
    // Check for interactive elements
    const handleLinkHover = () => {
      setIsLinkHovered(true);
    };
    
    const handleLinkLeave = () => {
      setIsLinkHovered(false);
    };
    
    // Add event listeners to links, buttons, and other interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });
    
    // Add general mouse event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, [isVisible, isClicked, isLinkHovered]);
  
  return (
    <>
      <div 
        ref={cursorRef} 
        className={`cursor ${isClicked ? 'cursor--clicked' : ''} ${isLinkHovered ? 'cursor--link-hovered' : ''}`}
      />
      <div 
        ref={cursorDotRef} 
        className={`cursor-dot ${isClicked ? 'cursor-dot--clicked' : ''} ${isLinkHovered ? 'cursor-dot--link-hovered' : ''}`}
      />
    </>
  );
};

export default AnimatedCursor;