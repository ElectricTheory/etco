import React, { useEffect, useState, useRef } from 'react';
import './App.scss';

import Header from './Components/Header';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useInView, animated } from '@react-spring/web';

import Main from './Layers/Main';
import dev_anim from './Assets/img/dev_act_anim.svg';
import bonfire from './Assets/img/toa_heftiba.jpg';
import Second from './Layers/Second';

const App = () => {
  const parallaxRef = useRef(null);
  const [parallax, setParallax] = useState(null);

  //animation for img fade inn
  const buildInteractionObserverThreshold = (count = 100) => {
    const threshold = [];

    const parts = 1 / count;

    for (let i = 0; i <= count; i++) {
      threshold.push(parseFloat((parts * i).toFixed(2)));
    }

    return threshold;
  };

  const [ref, isInView] = useInView({
    rootMargin: '-45% 0px -45% 0px',
    amount: buildInteractionObserverThreshold(),
    once: true
  });

  useEffect(() => {
    if (parallaxRef.current) {
      setParallax(parallaxRef.current);
    }
  }, []);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (parallax) {
      const handleScroll = () => {
        const currentScrollY = parallax.controller.scroll;

        const sections = ['home', 'about', 'services'];
        const sectionOffsets = sections.map((section) => ({
          section,
          offset: document.getElementById(section)?.offsetTop
        }));
        const currentSection = sectionOffsets.find(
          (offset) => offset.offset <= currentScrollY + window.innerHeight / 2
        )?.section;

        setActiveSection(currentSection || 'home');
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [parallax]);

  const [scrollPosition, setScrollPosition] = useState(0);

  // Event handler to update the scroll position
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  // Attach event listener on component mount and remove it on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const url = (name, wrap = false) =>
    `${
      wrap ? 'url(' : ''
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ')' : ''
    }`;

  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Header
        scrollToSection={(index) => parallax?.scrollTo(index)}
        activeSection={activeSection}
      />

      <Parallax
        ref={parallaxRef}
        pages={5}
        className="parallax-styles"
        style={{ backgroundColor: '#000000' }}
      >
        <Main />
        <Second />
        {/** 
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover'
          }}
          className="lax-three"
        >
          lax l8er
        </ParallaxLayer>
      
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          className="lax-three"
          style={{ pointerEvents: 'none' }}
        >
          <p>One</p>
          <img
            src={url('satellite4')}
            style={{ width: '15%', marginLeft: '70%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.8}
          style={{ opacity: 0.1 }}
          className="lax-four"
        >
          <p>two</p>

          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.75}
          speed={0.5}
          style={{ opacity: 0.1 }}
          className="lax-five"
        >
          <p>three</p>

          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '70%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '40%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.2}
          style={{ opacity: 0.2 }}
          className="lax-six"
        >
          <p>four</p>

          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.6}
          speed={-0.1}
          style={{ opacity: 0.4 }}
          className="lax-seven"
        >
          <p>five</p>

          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '60%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '25%', marginLeft: '30%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '80%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.6}
          speed={0.4}
          style={{ opacity: 0.6 }}
          className="lax-eight"
        >
          <p id="new">six</p>

          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '5%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '15%', marginLeft: '75%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          className="lax-nine"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}
        >
          <p>seven</p>

          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          className="lax-ten"
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true)
          }}
        >
          <p>eight</p>
        </ParallaxLayer>

        <ParallaxLayer
          className="lax-eleven"
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FCA311',
            backgroundImage: url(bonfire),
            color: '#FFFFFF'
          }}
        >
          <h1 style={{ color: '#000000' }}>
            electric theory Creative.
            <span style={{ color: '#FFFFFF' }}>The New What's Next?</span>
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          className={`lax-twelve`}
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <animated.div ref={ref}>
            {isInView ? (
              <img id="dev-anim" src={dev_anim} style={{ width: '300px' }} />
            ) : null}
          </animated.div>

          <p>ten</p>
        </ParallaxLayer>
          **/}
      </Parallax>
    </div>
  );
};

export default App;
