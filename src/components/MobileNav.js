import React from 'react';
import Close from './Close';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Facebook, Instagram } from './socials';

const MobileNav = ({ show, onHide }) => {
  const css = show ? 'modal modal--open' : 'modal modal--closed';

  return (
    <div className={css}>
      <Close onClick={onHide} className="modal__close" />
      <nav>
        <AnchorLink onClick={onHide} href="#palvelut">
          Palvelut
        </AnchorLink>
        <AnchorLink onClick={onHide} href="#esittely">
          Esittely
        </AnchorLink>
        <AnchorLink onClick={onHide} href="#hinnasto">
          Hinnasto
        </AnchorLink>
        <AnchorLink onClick={onHide} href="#ota-yhteytta">
          Ota Yhteyttä
        </AnchorLink>
        <AnchorLink onClick={onHide} href="#map">
          Yhteystiedot
        </AnchorLink>
        <div className="modal__socials">
          <a href="https://www.facebook.com/kosmetologipalvelutniina">
            <Facebook style={{ marginRight: '15px' }} />
          </a>
          <a href="https://www.instagram.com/kosmetologipalvelutniina/">
            <Instagram />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
