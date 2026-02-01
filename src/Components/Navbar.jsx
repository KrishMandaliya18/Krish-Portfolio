import React, { useState } from 'react';
import { Link } from 'react-scroll'; // react-scroll se Link import karein

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // href ki jagah 'to' use karenge jo Section ID se match karega
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 w-full">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          
          {/* Left: Brand/Logo */}
          <div className="flex items-center relative group">
            <div className="absolute -inset-2 bg-[#4ade80] rounded-full blur-xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
            <h1 className="relative text-2xl font-black tracking-tighter text-white cursor-pointer">
              Krish<span className="text-[#4ade80] text-3xl">.</span>
            </h1>
          </div>

          {/* Right: Menu Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to} // Section ID yahan aayegi
                spy={true} 
                smooth={true} 
                offset={-80} // Navbar ki height ke liye offset
                duration={500} 
                className="text-gray-400 hover:text-[#4ade80] text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#4ade80] transition-all duration-300 group-hover:w-full shadow-[0_0_12px_#4ade80]"></span>
              </Link>
            ))}
            
            <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 bg-[#4ade80] rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></div>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="block text-gray-400 hover:text-[#4ade80] text-lg font-medium transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;