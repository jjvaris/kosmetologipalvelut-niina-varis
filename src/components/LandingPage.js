import React, { useState, useEffect } from 'react';
import Burger from '../components/Burger';
import Modal from '../components/MobileNav';
import Div100 from '../components/Div100';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Parallax } from 'react-parallax';
import bgImg from '../static/landing.jpg';
import bgPlaceholder from '../static/landing-placeholder.jpg';

const LandingPage = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [loadState, setLoadState] = useState({
    src: bgPlaceholder,
    loaded: false,
  });

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoadState({ src: img.src, loaded: true });
    };
    img.src = bgImg;
  }, []);

  return (
    <Parallax
      bgImage={loadState.src}
      bgImageAlt="Etusivun kuva kukista"
      strength={200}
      bgClassName="bg-img"
      blur={0.0001}
    >
      <Div100 className="app">
        <div className="wrapper">
          <nav className="app__nav app__nav--mobile">
            <Burger onClick={() => setShowMobileNav(true)} />
            <Modal
              show={showMobileNav}
              onHide={() => setShowMobileNav(false)}
            />
          </nav>
          <nav className="app__nav app__nav--desktop">
            <AnchorLink href="#palvelut">Palvelut</AnchorLink>
            <AnchorLink href="#esittely">Esittely</AnchorLink>
            <AnchorLink href="#hinnasto">Hinnasto</AnchorLink>
            <AnchorLink href="#ota-yhteytta">Ota Yhteyttä</AnchorLink>
            <AnchorLink href="#map">Yhteystiedot</AnchorLink>
          </nav>
          <header className="app__header fade-in">
            <div className="app__title">
              <h3 className="app__h3 font-playfair">KOSMETOLOGIPALVELUT</h3>
              <h1 className="app__company_name font-playfair">NIINA VARIS</h1>
              <h3 className="app__h3">JOENSUU</h3>
            </div>
          </header>
          <div className="app__scroll">
            <div id="scroll-down">
              <AnchorLink href="#main">
                <span />
                <span />
                <span />
              </AnchorLink>
            </div>
          </div>
        </div>
      </Div100>
    </Parallax>
  );
};

export default LandingPage;
