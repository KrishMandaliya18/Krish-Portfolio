import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

// Custom Cursor Component
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
      transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
      className="fixed top-0 left-0 w-8 h-8 border-2 border-[#4ade80] rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{ boxShadow: "0 0 15px rgba(74, 222, 128, 0.5)" }}
    />
  );
};

const App = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-[#4ade80] selection:text-black">
      <CustomCursor />
      
      {/* Navbar ko Routes se bahar rakha hai taaki ye har page par dikhe */}
      <Navbar /> 

      <Routes>
        <Route path='/' element={
          <div> {/* Navbar ki height ke liye padding di hai */}
            <div id="home"><Home /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Project /></div>
            <div id="contact"><Contact /></div>
          </div>
        }/>
        
        {/* Individual Pages (Agar direct link se jana ho) */}
        <Route path='/skills' element={<div className="pt-20"><Skills /></div>} />
        <Route path='/project' element={<div className="pt-20"><Project /></div>} />
        <Route path='/contact' element={<div className="pt-20"><Contact /></div>} />
      </Routes>
    </div>
  )
}

export default App