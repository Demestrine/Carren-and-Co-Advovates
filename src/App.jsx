import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stories from './components/Stories/Stories';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import AttorneyProfile from './components/AttorneyProfile/AttorneyProfile';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Footer from './components/Footer/Footer';
// In your App.js, make sure to include Contact component:
import Contact from './components/Contact/Contact';

// Then in the return statement, add <Contact /> before <Footer />
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stories />
      <PracticeAreas />
      <AttorneyProfile />
      <Contact />
      <CaseStudies />
      <Footer />
    </div>
  );
}

export default App;