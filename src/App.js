import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import HomePage from './components/HomePage';
import AboveFooter from './components/AboveFooter';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import AboutSecurity from './components/AboutSecurity';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <AboutSecurity />
      <Services />
      <WhyChooseUs />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default App;