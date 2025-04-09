import './App.css';
import React from 'react';
import RoutesApp from './routes/RoutesApp';
import { CookiesProvider } from 'react-cookie';

function App() {

  return (
    <CookiesProvider>
      <RoutesApp />
    </CookiesProvider>

  );
}

export default App
