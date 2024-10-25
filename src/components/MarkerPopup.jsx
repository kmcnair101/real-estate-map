import React from 'react';

const MarkerPopup = ({ property, onClose }) => {
  return (
    <div className="popup-content">
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <p>Size: {property.size} sq ft</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MarkerPopup;