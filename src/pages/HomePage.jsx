import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';
import FilterControls from '../components/FilterControls';
import Legend from '../components/Legend';
import '../styles/main.css';

const HomePage = () => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000000,
    size: 0,
  });

  return (
    <div className="homepage">
      <h1>Commercial Real Estate Map</h1>
      <FilterControls filters={filters} setFilters={setFilters} />
      <MapComponent filters={filters} />
      <Legend />
    </div>
  );
};

export default HomePage;
