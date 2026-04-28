import Navbar from "./Home/Navbar";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home/Hero";
import About from "./Home/About";
import Projects from "./Home/Projects"; 
import Contact from "./Home/Contact"; 

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;