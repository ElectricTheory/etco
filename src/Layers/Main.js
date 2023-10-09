import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const styles = {
  layer: {
    backgroundColor: '#272727',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFE400'
  },
  subhead: {
    display: 'block',
    textAlign: 'center',
    fontFamily: 'noto',
    fontSize: '36px',
    fontStyle: 'italic',
    color: '#FFFFFF',
    opacity: 0.75
  }
};

export default function Main() {
  return (
    <ParallaxLayer speed={1} style={styles.layer}>
      <h1>
        Electric Theory Creative.{' '}
        <span style={styles.subhead}>the new What's Next?</span>
      </h1>
    </ParallaxLayer>
  );
}
