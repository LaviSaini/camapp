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
import ServiceDetail from "./pages/ServiceDetail";
import SolutionPage from "./pages/SolutionPage";
import ScrollToTop from "./common/ScrollToTop";
import SolutionDetailPage from "./pages/SolutionDetailPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/solutions" element={<SolutionPage />} />
        <Route path="/solutions/:solutionName" element={<SolutionDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
