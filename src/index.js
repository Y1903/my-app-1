import React from 'react';
import ReactDOM from 'react-dom/client';
import { CalendarProvider } from './context/CalendarContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CalendarProvider>
    <App />
  </CalendarProvider>
);