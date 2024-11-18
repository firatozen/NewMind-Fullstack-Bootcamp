import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { WeatherProvider } from './WeatherContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherProvider>
    <App />
    </WeatherProvider>
  </React.StrictMode>
);



