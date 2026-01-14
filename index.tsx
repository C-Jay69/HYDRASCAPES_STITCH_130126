import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/logo.svg?url';

function App() {
  return <img src={logo} alt="Hydrascapes logo" />;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
