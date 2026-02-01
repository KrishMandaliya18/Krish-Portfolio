import React, { useState } from 'react';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Projects ka data
  const projects = [
    {
      id: 1,
      title: "Figma UiUX design",
      description: "This is a modern and clean food delivery app design called SnackRush. It uses a bold red and white theme that looks very professional and appetizing. The layout is well-organized with easy-to-read cards, high-quality images, and a unique curved bottom menu that makes it stand out from typical apps.",
      image: "images/figma.png",
      tags: ["Figma"],
      // AAPKA FIGMA LINK YAHAN HAI
      figmaLink: "https://www.figma.com/design/Sx2cjvUPoUNwwCE7KDeVqq/Untitled?node-id=0-1&m=dev&t=an8GW9tOFDS1JiKB-1", 
      codeLink: "https://linkedin.com/in/yourprofile",
      liveLink: "https://your-live-demo.com"
    },
    {
      id: 2,
      title: "Tic-Tac-Toe",
      description:" This is a digital version of the classic Tic Tac Toe game, featuring a minimalist $3 \times 3 grid on a dark green background. It works through interactive logic where two players click on the tiles to place their respective marks. A Reset Game button at the bottom allows users to clear the board and start a new round instantly.", 
      image: "images/tic.png",
      tags: ["Html", "Css", "JavaScript"],
      codeLink: "https://github.com/KrishMandaliya18/Tic-Tac-Toe.git",
      liveLink: "https://tic-tac-toe-websites.netlify.app/"
    },
    
    {
      id: 3,
      title: "E-Commarce-Website",
      description: "The page functions as a marketing funnel. At the top, a navigation bar allows users to browse different sections like the Shop, Blog, or About Us, while a shopping cart icon provides quick access to their selected items. The main Hero Section uses a large, attractive image of a model to create a brand identity. To drive sales, it features a bold Super Value Deals headline and a clear Shop Now button, which is the primary Call-to-Action (CTA) designed to lead customers directly to the product listing page.",
      image: "images/web page.png",
      tags: ["Html", "Css"],
      codeLink: "https://github.com/KrishMandaliya18/E-Commarce-Website.git",
      liveLink: "https://e-commarce-websites.netlify.app/"
    },
    {
      id: 4,
      title: "Typing Page",
      description: "This is a personal branding or portfolio website for Mandaliya Brothers, featuring a dynamic typing animation that says I am a Coder. The page serves as a professional introduction, offering Join Us and Let's Chat buttons to facilitate networking. It also includes a theme-toggle icon at the bottom, allowing users to switch between light and dark modes for a better viewing experience.",
      image: "images/typing.png",
      tags: ["Html", "Css", "JavaScript"],
      codeLink: "https://github.com/KrishMandaliya18/Typing-Effect-page.git",
      liveLink: "https://typing-effect-web.netlify.app/"
    },
    {
      id: 5,
      title: "Food WebPage",
      description: "This is a landing page for a fast-food restaurant named Food In. It functions as a visual gateway to entice customers with a high-quality hero image of a burger and fries. The layout includes a navigation bar for easy access to the menu and contact details, along with prominent Explore More and Watch Video buttons designed to drive user engagement and online orders.",
      image: "images/food page.png",
      tags: ["Html", "Css", "JavaScript"],
      codeLink: "https://github.com/KrishMandaliya18/Responsive-food-web.git",
      liveLink: "https://responsive-food-webdesign.netlify.app/"
    },
    {
      id: 6,
      title: "Note App",
      description: "This image features a simple and clean Note-Taking application with a dark theme interface. It works by allowing users to enter a specific heading and detailed body text into input fields on the left. Once the Add Note button is clicked, the application is designed to save that data and display it under the Recent Note section on the right for quick reference.",
      image: "images/Note.png",
      tags: [,"React.js", "TailwindCss"],
      codeLink: "https://github.com/KrishMandaliya18/Note-app.git",
      liveLink: "https://note-website.netlify.app/"
    },
    
  ];

  return (
    <div id="projects" className="bg-[#0a0a0a] min-h-screen p-8 font-sans text-white">
      <h2 className="text-[#4ade80] text-center text-3xl font-bold mb-12 uppercase tracking-widest">
        My Projects
      </h2>

      {/* --- Project Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-[#111] rounded-xl overflow-hidden cursor-pointer border border-gray-800 transition-all duration-500 hover:border-[#4ade80] hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]"
          >
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#4ade80] rounded-xl transition-all duration-500 pointer-events-none"></div>
            
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
            />
            
            <div className="p-6">
              <h3 className="text-[#4ade80] text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-[10px] border border-[#4ade80]/40 text-[#4ade80] px-2 py-0.5 rounded uppercase tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Modal Popup --- */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-md">
          <div className="bg-[#111] max-w-2xl w-full rounded-2xl relative border border-[#4ade80]/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all transform scale-100">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black/50 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors"
            >
              ✕
            </button>

            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-64 object-cover border-b border-gray-800" 
            />
            
            <div className="p-8">
              <h2 className="text-[#4ade80] text-2xl font-bold mb-3">{selectedProject.title}</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-[#4ade80]/10 text-[#4ade80] px-3 py-1 rounded-full border border-[#4ade80]/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons Container */}
              <div className="flex flex-col gap-4">
                
                {/* 1. VIEW DESIGN (Figma) - Sirf tab dikhega jab figmaLink hoga */}
                {selectedProject.figmaLink ? (
                  <a 
                    href={selectedProject.figmaLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full text-center py-4 bg-[#4ade80] text-black font-extrabold rounded-xl hover:bg-[#22c55e] transition-all flex items-center justify-center gap-2 shadow-[0_5px_20px_rgba(74,222,128,0.3)] uppercase tracking-wider"
                  >
                    View UI/UX Design (Figma)
                  </a>
                ) : (
                  // Agar Figma link nahi hai toh purane buttons dikhao
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={selectedProject.codeLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 text-center py-3 border border-gray-600 text-gray-300 hover:border-[#4ade80] hover:text-[#4ade80] font-bold rounded-lg transition-all"
                    >
                      View Code
                    </a>
                    <a 
                      href={selectedProject.liveLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 text-center py-3 bg-[#4ade80] text-black font-bold rounded-lg hover:bg-[#3dbd6b] transition-all shadow-[0_5px_15px_rgba(74,222,128,0.3)]"
                    >
                      Live Demo
                    </a>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;