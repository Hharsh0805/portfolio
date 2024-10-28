import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import Home page
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      {/* <Header /> Render Header component */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home page */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        
      </Routes>
    </Router>
  );
};

export default App;
