import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-holfre2aytp2txuy.us.auth0.com"
  clientId="OyJbLKzkDhOVPkhu5u6nZGFX12qDI49x"
  redirectUri={window.location.origin}>
   <App />
</Auth0Provider> 
);