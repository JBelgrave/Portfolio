import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import PriorExperience from './components/PriorExperience/PriorExperience';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path="/home" element={<LandingPage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/priorexperience" element={<PriorExperience />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </div>
  )
}