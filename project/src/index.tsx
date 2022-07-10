import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Settings = {
  PLACES_AMOUNT: 5
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App placesAmount = {Settings.PLACES_AMOUNT}/>
  </React.StrictMode>,
);
