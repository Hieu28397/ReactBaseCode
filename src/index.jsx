import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Toast from 'components/Toast';

import App from './App';
import store from './store';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toast />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
