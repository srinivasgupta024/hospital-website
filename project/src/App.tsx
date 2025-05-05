import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Dashboards from './components/sections/Dashboards';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  // Update document title
  useEffect(() => {
    document.title = 'HealthPriceIQ - Hospital Price Transparency';
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <About />
          <Stats />
          <Dashboards />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;