import React, { createContext, useContext, useReducer } from 'react'; 


const WeatherContext = createContext()

const initialState = {
    selectedCity: 'Istanbul',
    weatherData: null,
  };

  const weatherReducer = (state, action) => {
    switch (action.type) {
      case 'SET_SELECTED_CITY':
        return { ...state, selectedCity: action.payload };
      case 'SET_WEATHER_DATA':
        return { ...state, weatherData: action.payload };
      default:
        return state;
    }
  };
  
  const WeatherProvider = ({ children }) => {

    const [state, dispatch] = useReducer(weatherReducer, initialState);

    return (
      <WeatherContext.Provider value={{ state, dispatch }}>
        {children}
      </WeatherContext.Provider>
    );
  };

    const useWeather = () => {
        const context = useContext(WeatherContext);
        if (!context) {
          throw new Error('useWeather must be used within a WeatherProvider');
        }
        return context;
      };
      
    export { WeatherProvider, useWeather };

