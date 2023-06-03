import React, { useEffect, useState, useRef } from 'react';
import './App.scss';
import Section from './Components/Section';
import useOnScreen from './Hooks/useOnScreen';
import useScrollToSection from './Hooks/useScrollToSection';
import Header from './Components/Header';

const App = () => {
  /** 
  const [scrollY, setScrollY] = useState(0);
  const scrollToSection = useScrollToSection();
 **/
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
          window.scrollTo({
              top: section.offsetTop,
              behavior: 'smooth',
          });
      }
  };

  const aboutSectionRef = useRef();
  const aboutOnScreen = useOnScreen(aboutSectionRef, "-300px");

  const contactSectionRef = useRef();
  const contactOnScreen = useOnScreen(contactSectionRef, "-300px");

  const newSectionRef = useRef();
  const newSectionOnScreen = useOnScreen(newSectionRef, "-300px");

  return (
    <div className="parallax-container">


<Header scrollToSection={scrollToSection} scrollY={scrollY} aboutOnScreen={aboutOnScreen} contactOnScreen={contactOnScreen} newSectionOnScreen={newSectionOnScreen}  />

      <div className="parallax" style={{ transform: `translateY(-${scrollY * 0.5}px)` }}>
        <h1>Welcome to the Parallax Page</h1>
        <p>Scroll down to see the effect!</p>



        <div className="content" id="about" ref={aboutSectionRef}>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>


      <div className="content" id="contact" ref={contactSectionRef}>
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <Section title="newSec" opt={newSectionRef}/>






      </div>



    </div>
  );
};

/** 
  function useOnScreen(ref, rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
  }

  **/

export default App;