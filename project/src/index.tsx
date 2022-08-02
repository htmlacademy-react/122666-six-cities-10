import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import offers from './mocks/offers';

const Settings = {
  PLACES_AMOUNT: 5
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App placesAmount = {Settings.PLACES_AMOUNT} offers={offers}/>
    </Provider>
  </React.StrictMode>,
);
