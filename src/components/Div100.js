import React from 'react';

const Div100 = ({ children, ...props }) => {
  let heightStyle;
  const height = window.innerHeight;
  if (typeof height !== 'number' || height < 0) {
    heightStyle = '100vh';
  } else {
    heightStyle = height + 'px';
  }

  return (
    <div {...props} style={{ height: heightStyle }}>
      {children}
    </div>
  );
};

export default Div100;
