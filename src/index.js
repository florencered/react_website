import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <AppProvider> {/*app provider was can now access all the contents of the app*/}
  <React.StrictMode>
    <App />
  </React.StrictMode> 
  </AppProvider>
);



