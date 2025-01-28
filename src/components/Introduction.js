import React from 'react';
import niina from '../static/niina.jpg';

const Introduction = () => (
  <section
    id="esittely"
    className="dark"
    style={{ backgroundColor: '#CAC5BD' }}
  >
    <div className="introduction content">
      <div className="avatar">
        <img className="avatar__img" src={niina} alt="Niina Partanen" />
      </div>
      <h2>NIINA PARTANEN</h2>
      <p>
        Koulutukseltani olen SKY-kosmetologi sekä lähihoitaja. Palveluihin
        kuuluvat ihokarvojen hellävarainen poisto sokeroinnilla yli kymmenen
        vuoden ammattitaidolla.
      </p>
    </div>
  </section>
);

export default Introduction;
