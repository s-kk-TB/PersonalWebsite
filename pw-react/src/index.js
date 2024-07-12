import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';

/* PAGES */
import App from './App';
import Mods from './Mods';
import Gallery from "./Gallery";
import Project from './Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Mods' element={<Mods />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path='/Project' element={<Project />} />
        </Routes>
    </Router>
  </React.StrictMode>
);
