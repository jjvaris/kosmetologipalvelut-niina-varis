import React from 'react';
import campaignPicture from '../static/pikkujoulut.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Campaign = ({ until }) => {
  return (
    <React.Fragment>
      {new Date() < until && (
        <section id="campaign" className="dark campaign">
          <div className="campaign__div">
            <AnchorLink href="#ota-yhteytta">
              <img
                className="campaign__img"
                src={campaignPicture}
                alt="Pikkujoulumeikkaus kampanja"
              />
            </AnchorLink>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Campaign;
