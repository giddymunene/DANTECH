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

function App() {
  return (
    <Router>
      <div>
        <Header />
        <HeroSection />
        <Services />
        <Testimonials />
        <Articles />
        <Contact/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
