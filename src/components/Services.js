import React, { useState } from 'react';
import helmiLogo from '../static/lapinnimen-helmi.png';
import Instructions from './Instructions';
import SmoothCollapse from 'react-smooth-collapse';

const Services = () => {
  const [showInstructions, setShowIntructions] = useState(false);

  return (
    <section id="palvelut" style={{ marginBottom: '1em', flexGrow: '1' }}>
      <div className="content">
        <h2 style={{ marginBottom: '50px' }}>PALVELUT</h2>
        <div className="service-img">
          <h3
            style={{
              marginBottom: '50px',
              fontSize: '1.4em',
            }}
          >
            SOKEROINNIT
          </h3>
          <img src={helmiLogo} alt="Lapinniemen Helmi logo" />
        </div>
        <div className="sokerointi">
          {/* <h3 style={{ marginBottom: '30px' }}>
                  ALEXANDRIA PROFESSIONAL &reg; BODY SUGARING
                </h3> */}
          {/* <h3>Alexandria Professional Body Sugaring</h3> */}
          <p style={{ textAlign: 'start' }}>
            Lapinniemen Helmi<sup>&reg;</sup> sokerointituotteet on suunniteltu
            herkälle suomalaiselle iholle. Tuotteet ovat eettisesti tuotettua
            vegaanista luonnonkosmetiikkaa.
          </p>
          <p style={{ textAlign: 'start' }}>
            Sokerointi Lapinniemen Helmellä on hellävarainen
            karvanpoistomenetelmä. Miellyttävän pehmeällä sokerimassalla karvat
            poistuvat tehokkaasti ja hellävaraisesti. Sokerointi on silloin
            nopeaa ja mahdollisimman kivutonta. Lapinniemen Helmi
            sokerointituotteet sopivat myös herkälle iholle ja raskaana
            oleville.
          </p>
          <button
            className="sokerointi__button"
            onClick={() => setShowIntructions(!showInstructions)}
          >
            Tutustu sokeroinnin ohjeisiin
          </button>
          <SmoothCollapse
            expanded={showInstructions}
            heightTransition="ease-in-out .5s"
          >
            <Instructions />
          </SmoothCollapse>
        </div>
      </div>
    </section>
  );
};

export default Services;
