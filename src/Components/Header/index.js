import React from 'react';

import logo from '../../Assets/img/logo_white.svg';

var styles = {
    position: 'fixed',
    top: '0',
    background: 'rgba(0, 0, 0, .8)',
    color: '#FCA311',
    width: '100%',
    zIndex: '999'
};


const Header = ({ scrollToSection, activeSection }) => {
  return (
    <header className="app-header" style={styles}>
      <nav style={{display: 'flex'}}>
        <ul>
          <li onClick={() => scrollToSection(0)} className={activeSection === 'home' ? 'active' : ''}>
            Home
          </li>
          <li onClick={() => scrollToSection(1)} className={activeSection === 'about' ? 'active' : ''}>
            About
          </li>
          <li onClick={() => scrollToSection(2)} className={activeSection === 'services' ? 'active' : ''}>
            Services
          </li>
        </ul>
        <img src={logo} style={{ width: '100px'}} />
      </nav>
    </header>
  );
};

export default Header;


