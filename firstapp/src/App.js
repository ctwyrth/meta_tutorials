import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

import Homepage from './components/react-router-dom/Homepage';
import AboutMe from './components/react-router-dom/AboutMe';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>{' '}
        <Link to="/about-me" className="nav-item">About Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
