import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import './App.css'

function App () {

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
