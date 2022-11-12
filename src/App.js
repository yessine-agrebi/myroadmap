import Frontend from './components/Frontend';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="conatiner flex flex-col justify-center items-center gap-5">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend" element={<Frontend />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
