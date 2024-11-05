import React, { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponent';
import { fetchProperties } from '../services/propertyService';
import '../styles/main.css';

const PropertyListPage = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000000,
    size: 0,
  });

  useEffect(() => {
    fetchProperties().then((data) => setProperties(data));
  }, []);

  const filteredProperties = properties.filter((property) => {
    return (
      property.price >= filters.minPrice &&
      property.price <= filters.maxPrice &&
      property.size >= filters.size
    );
  });

  return (
    <div className="property-list-page">
      <div className="property-list">
        <h2>Available Properties</h2>
        <ul>
          {filteredProperties.map((property) => (
            <li key={property.id}>
              <h3>{property.name}</h3>
              <p>Price: ${property.price}</p>
              <p>Size: {property.size} sq ft</p>
            </li>
          ))}
        </ul>
      </div>
      <MapComponent properties={filteredProperties} />
    </div>
  );
};

export default PropertyListPage;
