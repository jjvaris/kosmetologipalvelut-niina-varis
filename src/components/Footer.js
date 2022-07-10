import React from 'react';
import logo from '../static/logo.jpeg';
import tietosuojaseloste from '../static/tietosuojaseloste.pdf';
import { Date } from 'core-js';

const Footer = () => (
  <footer>
    <div className="service-img">
      <img
        className="kosmetologi-kotiisi-logo"
        src={logo}
        alt="Kosmetologipalvelut Niina Partanen logo"
        style={{ marginBottom: '30px' }}
      />
    </div>
    <p
      style={{
        textAlign: 'center',
        paddingTop: '0px',
        fontSize: '0.7em',
      }}
    >
      <a href={tietosuojaseloste}>Tietosuojaseloste</a>
    </p>
    <p
      style={{
        textAlign: 'center',
        paddingTop: '40px',
        fontSize: '0.7em',
      }}
    >
      COPYRIGHT &copy; {new Date().getFullYear()}
    </p>
    <p style={{ fontSize: '0.7em', textAlign: 'center' }}>
      Design by{' '}
      <a href="https://www.linkedin.com/in/jouni-varis-990a5585/">
        Jouni Varis
      </a>
    </p>
  </footer>
);

export default Footer;
