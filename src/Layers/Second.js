import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

var styles = {
  layer: {
    backgroundColor: '#272727'
  },
  header: {
    marginTop: '100px',
    fontSize: '42px',
    color: '#FFFFFF',
    opacity: 0.75
  },
  subheader: {
    display: 'block'
  },
  block: {
    float: 'right'
  }
};

export default function Second() {
  return (
    <ParallaxLayer
      offset={1}
      speed={0.1}
      className="law-two"
      style={styles.layer}
    >
      <h2 style={styles.header}>
        Hello,<span style={styles.subheader}>My name is Tim.</span>
      </h2>
      <div style={styles.block}>
        <p>
          I am a JavaScript Developer with three years of experience on the
          ServiceNow platform.
        </p>
      </div>
    </ParallaxLayer>
  );
}
