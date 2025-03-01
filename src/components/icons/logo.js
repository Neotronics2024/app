import React from 'react';

const Logo = ({ isWhite, color, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 100"
      fill={color}
      {...props}
      sx={{ width: '150px', height: 'auto' }}
    >
      <text
        x="10"
        y="65"
        fontSize="40"
        fontWeight="bolder"
        fontFamily="'Segoe UI', Arial, sans-serif"
      >
        Neotronics
      </text>
    </svg>
  );
};

export default Logo;
