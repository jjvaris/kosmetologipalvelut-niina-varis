import React from 'react';
import PriceTable from './PriceTable';
import logo from '../static/logo2.jpg';

export default function PrintPriceTable(props) {
  return (
    <section>
      <div className="content" style={{ fontSize: '14px' }}>
        <div className="service-img">
          <img
            src={logo}
            alt="Kosmetologipalvelut Niina Varis logo"
            style={{ marginTop: '-15px', marginBottom: '10px', width: '130px' }}
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
