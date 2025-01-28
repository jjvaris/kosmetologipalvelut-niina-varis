import React, { useEffect, useState } from 'react';
import Campaign from './components/Campaign';
import ContactForm from './components/ContactForm';
import PriceTable from './components/PriceTable';
import Services from './components/Services';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import LandingPage from './components/LandingPage';
import woman from './static/woman.jpg';
import { Parallax } from 'react-parallax';
// import { getInstagramFeed } from './api';
import InstagramFeed from './components/InstagramFeed';
import ContactDetails from './components/ContactDetails';
import Map from './components/Map';
import PrintPriceTable from './components/PrintPriceTable';
import helmiLogo from './static/lapinnimen-helmi.png';

export default function App() {
  const [instaFeed] = useState(undefined);

  useEffect(() => {
    // getInstagramFeed().then((response) => setInstaFeed(response));
  }, []);

  if (window.location.hash === '#hinnasto/tulosta') {
    return <PrintPriceTable />;
  }

  return (
    <React.Fragment>
      <LandingPage />
      <main id="main">
        <Services />
        {/* <Parallax
          bgImage={products}
          bgImageAlt="Sokerointi tuotteita"
          strength={200}
          bgClassName="bg-img"
        >
          <div className="bg-image-products" />
        </Parallax> */}

        <section className="helmi-mainos">
          <div className="content">
            <div className="helmi-mainos--content">
              <div>
                <h2 className="helmi-mainos--title">LUONNOLLISTA</h2>
                <h2 className="helmi-mainos--title">LUKSUSTA</h2>
              </div>
              <p>Sokeroinnilla saat karvattoman ihon luonnollisesti.</p>
              <p>
                Lapinniemen Helmi tuotteet ovat 100% luonnollisia, vegaanisia ja
                hajusteettomia.
              </p>
              <p>Luonnollista luksusta ihollesti - hellävaraisesti.</p>
              <img
                className="helmi-mainos--logo"
                src={helmiLogo}
                alt="Lapinniemen Helmi logo"
              />
            </div>
          </div>
        </section>

        <Introduction />
        <section id="hinnasto">
          <div className="content">
            <h2>HINNASTO</h2>
            {/* <p>Tuon mukanani hoitopöydän ja kaiken tarvittavan.</p> */}
            <PriceTable />
            <p style={{ fontSize: '0.9em', textAlign: 'left' }}>
              <span style={{ fontSize: '1.2em' }}>&#42;</span> Brasilialainen
              sokerointi vain täysi-ikäisille naisille.
            </p>
          </div>
        </section>
        <Parallax
          bgClassName="bg-img"
          bgImage={woman}
          bgImageAlt="Woman body"
          strength={200}
        >
          <div className="vh-60 bg-image-products" />
        </Parallax>
        <section id="ota-yhteytta" className="dark">
          <div className="content">
            <h2>OTA YHTEYTTÄ</h2>
            <ContactForm />
          </div>
        </section>
        <Campaign
          from={new Date('2023-04-23')}
          until={new Date('2023-05-03')}
        />
        <Map />
        <ContactDetails />

        {instaFeed && <InstagramFeed instaFeed={instaFeed} />}
      </main>
      <Footer />
    </React.Fragment>
  );
}
