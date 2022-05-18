import $ from 'jquery';
import jwt from "jsonwebtoken";
//import './assets/js/app.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getAuthData } from './Api/auth';
import './assets/css/app.css';
import './assets/css/custom.css';
import './assets/css/index.css';
import { API_BASE_URL, jwt_secret } from './config';
import { getToken, removeToken } from './Helper';
import reportWebVitals from './reportWebVitals';
import App from './router';
import { setlogin } from './Store/actions/auth';
import store from './Store/index';
window.$ = $;

let token = getToken();
if (token) {
  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      console.log('ddd', err)
      removeToken();
      token = null;
    } else {
      if (decoded.iss !== `${API_BASE_URL}login`) {
        removeToken();
        token = null;
      }
    }
  });
}

// Load plugins
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

if (token) {
  getAuthData().then(({ data }) => {
    store.dispatch(setlogin(data.data));
    render();
  });
} else {
  render();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
