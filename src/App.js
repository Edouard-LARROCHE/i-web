import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Phone from './components/start/Phone';

function App() {
  return (
    <div className='bg-gray2'>
      <Routes>
        <Route exact path='/' element={<Phone />} />
      </Routes>
    </div>
  );
}

export default App;
