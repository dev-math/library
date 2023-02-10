import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './routes'
import './style.css';
import './utils/top-decoration.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
