import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import 'boxicons/css/boxicons.min.css';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Certifications from './components/Certifications.jsx';
import Footer from './components/Footer.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
        <video className="back-vid" autoPlay loop muted plays-inline="true" src="./galaxy.mp4"></video>
   <BrowserRouter>
   <Navbar />
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
   <Certifications/>
   <Footer/>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
