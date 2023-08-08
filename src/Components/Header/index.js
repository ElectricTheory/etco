import React from 'react';

import logo from '../../Assets/img/logo_white.svg';


var styles = {
  appHeader: {
    position: 'fixed',
    top: '0',
    background: 'rgba(0, 0, 0, .8)',
    color: '#FCA311',
    width: '100%',
    zIndex: '999'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    list: {
      display: 'flex',
      listStyleType: 'none',
      padding: '10px',
      listItem: {
        fontSize: '16px'
      }
    },
    logo: {
      width: '50px'
    }
  },
  
}


const Header = ({ scrollToSection, activeSection }) => {
  return (
    <header className="app-header" style={styles.appHeader}>
      <nav style={styles.nav}>
        <ul style={styles.nav.list}>
          <li style={styles.nav.list.listItem} onClick={() => scrollToSection(0)} className={activeSection === 'home' ? 'active' : ''}>
            Home
          </li>
          <li style={styles.nav.list.listItem} onClick={() => scrollToSection(1)} className={activeSection === 'about' ? 'active' : ''}>
            About
          </li>
          <li style={styles.nav.list.listItem} onClick={() => scrollToSection(2)} className={activeSection === 'services' ? 'active' : ''}>
            Services
          </li>
        </ul>
        <img src={logo} style={styles.nav.logo} />
      </nav>
    </header>
  );
};

export default Header;


