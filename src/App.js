import React, {useEffect} from 'react';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-PEHJ803RZ5";
ReactGA.initialize(TRACKING_ID);


function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
