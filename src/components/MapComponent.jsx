import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { fetchProperties } from '../services/propertyService';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.730610, 
    longitude: -73.935242,  
    zoom: 10,
    width: '100vw',
    height: '100vh',
  });

  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    fetchProperties().then((data) => setProperties(data));
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      onViewportChange={(newViewport) => setViewport(newViewport)}
    >
      {properties.map((property) => (
        <Marker
          key={property.id}
          latitude={property.latitude}
          longitude={property.longitude}
        >
          <button
            onClick={() => setSelectedProperty(property)}
            className="marker-btn"
          >
            <img src="/assets/markers/office-icon.png" alt="Property Marker" />
          </button>
        </Marker>
      ))}

      {selectedProperty && (
        <Popup
          latitude={selectedProperty.latitude}
          longitude={selectedProperty.longitude}
          onClose={() => setSelectedProperty(null)}
        >
          <div>
            <h3>{selectedProperty.name}</h3>
            <p>{selectedProperty.description}</p>
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default MapComponent;