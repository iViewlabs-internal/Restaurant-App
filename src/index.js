import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"

// import store from "./app/redux/store";
import { Provider } from "react-redux";
import store from "./app/redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode> 
);