import axios from "axios";

const apiKey = "cf3d2f7cb1c203206734dde024bd1e10"

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
  });

  export const fetchWeatherData = async (city) => {
    try {
      const response = await api.get('/forecast', {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric', 
        },

        
      });
  
      console.log('Alınan Veri:', response.data);

      return response.data;
    } catch (error) {
      throw error;
    }
  };