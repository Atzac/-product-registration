import './App.css';
import React from 'react';

import Navbar from './componentes/navBar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rotas from './rotas';

export default function App() {
  return (
      <Router>
        <Navbar />
        <Rotas />
      </Router>
  );
}
