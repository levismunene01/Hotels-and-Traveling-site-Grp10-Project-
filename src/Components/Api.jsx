import axios from 'axios';

const API_URL = 'https://hotels-gicm.onrender.com/todo';

const Api = {
  // Function to fetch hotel data
  fetchHotels: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
      
    } catch (error) {

      console.error('Error fetching hotels:', error);

      return [];
    }
  }
};

export default Api;
