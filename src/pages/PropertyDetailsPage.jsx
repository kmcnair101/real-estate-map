import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPropertyById } from '../services/propertyService';

const PropertyDetailsPage = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetchPropertyById(propertyId).then((data) => setProperty(data));
  }, [propertyId]);

  if (!property) {
    return <p>Loading property details...</p>;
  }

  return (
    <div className="property-details-page">
      <h2>{property.name}</h2>
      <p>Address: {property.address}</p>
      <p>Price: ${property.price}</p>
      <p>Size: {property.size} sq ft</p>
      <p>{property.description}</p>
    </div>
  );
};

export default PropertyDetailsPage;
