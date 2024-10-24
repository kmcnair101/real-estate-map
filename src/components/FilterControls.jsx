import React from 'react';

const FilterControls = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="filter-controls">
      <label>
        Min Price:
        <input type="number" name="minPrice" onChange={handleInputChange} />
      </label>
      <label>
        Max Price:
        <input type="number" name="maxPrice" onChange={handleInputChange} />
      </label>
      <label>
        Size (sq ft):
        <input type="number" name="size" onChange={handleInputChange} />
      </label>
    </div>
  );
};

export default FilterControls;
