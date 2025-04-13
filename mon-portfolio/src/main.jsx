import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- Ajoutez cette ligne
import App from './App';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/"> {/* <-- Enveloppez votre App avec BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);