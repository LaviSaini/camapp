// import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import './App.css';
// import HomePage from './components/HomePage';
// import AboveFooter from './components/AboveFooter';
// import WhyChooseUs from './components/WhyChooseUs';
// import Services from './components/Services';
// import AboutSecurity from './components/AboutSecurity';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <HomePage />
//       <AboutSecurity />
//       <Services />
//       <WhyChooseUs />
//       <AboveFooter />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import ServicePage from "./pages/ServicePage";
import Contact from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />   
    </Router>
  );
}

export default App;
