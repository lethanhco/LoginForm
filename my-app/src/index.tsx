import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './LoginForm/LoginPage';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);

reportWebVitals();
