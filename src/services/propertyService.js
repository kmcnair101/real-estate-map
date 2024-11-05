import axios from 'axios';


const API_BASE_URL = 'http://localhost:5000';


export const fetchProperties = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/properties`);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};


export const fetchPropertyById = async (propertyId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/properties/${propertyId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching property with ID ${propertyId}:`, error);
    return null;
  }
};


export const fetchFilteredProperties = async (filters) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/properties`, {
      params: filters, 
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching filtered properties:', error);
    return [];
  }
};
