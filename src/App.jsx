import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services'; // Updated from Stories
import Features from './components/Features/Features'; // Updated from PracticeAreas
import Team from './components/Team/Team'; // Updated from AttorneyProfile
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;