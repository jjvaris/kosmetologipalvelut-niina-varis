import React from 'react';

const Burger = ({ onClick }) => (
  <button id="burger" onClick={onClick}>
    <div>
      <span />
      <span />
      <span />
    </div>
  </button>
);

export default Burger;
