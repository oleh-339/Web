import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TileSection from './components/TileSection';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <TileSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;