import React from 'react';
import campaignPicture from '../static/lomalla.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Campaign = ({ from, until }) => {
  const now = new Date();
  return (
    <React.Fragment>
      {from < now && now < until && (
        <section id="campaign" className="campaign">
          <div className="campaign__div">
            <AnchorLink href="#ota-yhteytta">
              <img
                className="campaign__img"
                src={campaignPicture}
                alt="Lomalla info"
              />
            </AnchorLink>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Campaign;
