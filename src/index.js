import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
// import dotenv from 'dotenv'
// dotenv.config();

axios.defaults.baseURL ="https://pi-server-production.up.railway.app/";

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')  //renderizo en el root
);

reportWebVitals();
