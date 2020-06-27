import React from 'react';
import { Instagram } from '../components/socials';

const Image = ({ image }) => (
  <div className="instagram-img-container">
    <img
      className="instagram-img-container__img"
      src={image.src}
      alt={image.content}
    />
    <a href={image.link}>
      <div className="instagram-img-container__hover-bg">
        <Instagram
          size={40}
          style={{ opacity: '10', color: 'var(--global--font-color--hover)' }}
        />
      </div>
    </a>
  </div>
);

const InstagramFeed = ({ instaFeed }) => (
  <section id="instagram" style={{ marginTop: '50px', padding: '0px' }}>
    {instaFeed ? (
      <div className="image-grid">
        {instaFeed.slice(0, 8).map(item => (
          <Image key={item.src} image={item} />
        ))}
      </div>
    ) : null}
  </section>
);

export default InstagramFeed;
