import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Tools from './components/Tools';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Define routes for each component */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/tools" element={<Tools />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
