import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; 


export const fetchMarketTrends = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/analytics/market-trends`);
    return response.data;
  } catch (error) {
    console.error('Error fetching market trends:', error);
    return null;
  }
};

export const fetchVacancyRates = async (area) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/analytics/vacancy-rates`, {
      params: { area },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching vacancy rates for area ${area}:`, error);
    return null;
  }
};
