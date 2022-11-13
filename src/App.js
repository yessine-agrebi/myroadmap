import Frontend from './components/Frontend';
import Backend from './components/Backend';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {
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
