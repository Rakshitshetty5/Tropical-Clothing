import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistor} from './redux/store'

import App from './App';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
