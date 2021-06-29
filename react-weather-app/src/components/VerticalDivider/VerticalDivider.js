import React from 'react';

const VerticalDivider = ({
  color,
  width,
}) => (
  <div 
    style={{
      width,
      backgroundColor: color,
    }} 
  />
);

export default VerticalDivider;