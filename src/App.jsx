import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import SinglesPage from './SinglesPage';
import DiptychPage from './DiptychPage';
import TriptychPage from './TriptychPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import './App.css'

function App () {

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/singles" element={<SinglesPage/>} />
          <Route path="/diptych" element={<DiptychPage/>} />
          <Route path="/triptych" element={<TriptychPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
