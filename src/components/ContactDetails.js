import React from 'react';
import { Facebook, Instagram } from '../components/socials';
import { GoLocation } from 'react-icons/go';

const ContactDetails = () => (
  <section id="yhteystiedot">
    <div className="content">
      <h2>YHTEYSTIEDOT</h2>
      <div className="contact">
        <div className="contact__person">
          <p>Niina Partanen (os. Varis)</p>
          <p>SKY-kosmetologi, lähihoitaja</p>
          <p className="contact__reservations">Ajanvaraukset</p>
          <p>
            <a href="tel:0400586586">0400 586 586</a>
          </p>
          <p>
            <a href="https://wa.me/358400586586">WhatsApp</a>
          </p>
          <p>
            <a href="mailto:info@niinapartanen.fi">info@niinapartanen.fi</a>
          </p>
        </div>
        <div className="contact__office">
          <p>
            <a href="https://goo.gl/maps/pEvK8eNbPVZCKPPw9">
              <GoLocation /> Nepenmäenkatu 11 lt. 1, 80200 Joensuu
            </a>
          </p>
          <p>Hoitola avoinna vain ajanvarauksella</p>
        </div>
      </div>
      <p style={{ marginTop: '40px' }}>Y-tunnus: 2254322-5</p>
      <div className="socials">
        <a href="https://www.facebook.com/kosmetologipalvelutniina">
          <Facebook style={{ marginRight: '15px' }} />
        </a>
        <a href="https://instagram.com/kosmetologipalvelutniina">
          <Instagram />
        </a>
      </div>
    </div>
  </section>
);

export default ContactDetails;
