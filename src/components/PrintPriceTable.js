import React from 'react';
import PriceTable from './PriceTable';
import logo from '../static/logo.jpg';

export default function PrintPriceTable(props) {
  return (
    <section>
      <div className="content" style={{ fontSize: '22px' }}>
        <div className="service-img">
          <img
            src={logo}
            alt="Kosmetologipalvelut Niina Partanen logo"
            style={{ marginBottom: '8px', width: '250px' }}
          />
        </div>
        <h1>HINNASTO</h1>
        {/* <p>Tuon mukanani hoitopöydän ja kaiken tarvittavan.</p> */}
        <PriceTable />
        <p style={{ fontSize: '0.9em', textAlign: 'left' }}>
          <span style={{ fontSize: '1.2em' }}>&#42;</span> Brasilialainen
          sokerointi vain täysi-ikäisille.
        </p>
      </div>
    </section>
  );
}
