import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
