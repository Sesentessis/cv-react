import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { CV } from './pages/CV';
import { AboutProject } from './pages/AboutProject';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<CV />} />
      <Route path="aboutproject" element={<AboutProject />} />
    </Routes>
  </div>
);

export default App;
