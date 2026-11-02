import React from 'react';

const PrimaryButton = ({ text, onClick, className = 'buy-btn' }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;