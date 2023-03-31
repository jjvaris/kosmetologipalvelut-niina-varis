import React, { useEffect, useState } from 'react';
import Campaign from './components/Campaign';
import ContactForm from './components/ContactForm';
import PriceTable from './components/PriceTable';
import Services from './components/Services';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import LandingPage from './components/LandingPage';
import woman from './static/woman.jpg';
import products from './static/products.jpg';
import { Parallax } from 'react-parallax';
// import { getInstagramFeed } from './api';
import InstagramFeed from './components/InstagramFeed';
import ContactDetails from './components/ContactDetails';
import Map from './components/Map';
import PrintPriceTable from './components/PrintPriceTable';

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
        <Parallax
          bgImage={products}
          bgImageAlt="Sokerointi tuotteita"
          strength={200}
          bgClassName="bg-img"
        >
          <div className="bg-image-products" />
        </Parallax>
        <Introduction />
        <section id="hinnasto">
          <div className="content">
            <h1>HINNASTO</h1>
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
            <h1>OTA YHTEYTTÄ</h1>
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
