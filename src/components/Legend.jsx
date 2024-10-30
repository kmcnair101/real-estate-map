import React from 'react';
import '..styles/Legend.css'; 

const Legend = () => {
  return (
    <div className="map-legend">
      <h3>Map Legend</h3>
      <ul>
        <li>
          <img src="/assets/markers/office-icon.png" alt="Office Icon" />
          Office Space
        </li>
        <li>
          <img src="/assets/markers/retail-icon.png" alt="Retail Icon" />
          Retail Space
        </li>
        <li>
          <img src="/assets/markers/industrial-icon.png" alt="Industrial Icon" />
          Industrial Space
        </li>
      </ul>
    </div>
  );
};

export default Legend;
