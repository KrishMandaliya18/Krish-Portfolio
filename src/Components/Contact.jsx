import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaBriefcase,FaLaptopHouse,FaEnvelope, FaBuilding, FaClock, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
// 1. EmailJS import kiya (axios ki zarurat nahi hai)
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [selectedService, setSelectedService] = useState('Frontend Dev');
  const [workMode, setWorkMode] = useState('Office');
  const [loading, setLoading] = useState(false);

  const services = ['Frontend Dev', 'UI/UX Design', 'Video Editing'];
  const modes = [
    { id: 'Office', icon: <FaBuilding />, label: 'Office' },
    { id: 'Remote', icon: <FaLaptopHouse />, label: 'Remote' },
    { id: 'Hybrid', icon: <FaClock />, label: 'Hybrid' }
  ];

  const socials = [
    { icon: <FaInstagram />, link: "https://instagram.com/mandaliya_krish", hoverColor: "#E4405F" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/krish-mandaliya-b3329a2b4", hoverColor: "#0A66C2" },
    { icon: <FaGithub />, link: "https://github.com/KrishMandaliya18", hoverColor: "#ffffff" },
    { icon: <FaEnvelope /> , link: "mailto: mandaliyakrish18@gmail.com", hoverColor: "#EA4335" }
  ];

  // 2. Updated sendEmail function for EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      company_name: e.target.company_name.value,
      official_email: e.target.user_email.value, // Dashboard me {{official_email}} se match hona chahiye
      salary: e.target.salary.value,
      requirements: e.target.requirements.value,
      expertise: selectedService, // Dashboard me {{expertise}} se match hona chahiye
      work_mode: workMode,        // Dashboard me {{work_mode}} se match hona chahiye
    };

    emailjs.send(
      'service_3jm5hhd',   // Step 1: Gmail wali Service ID yahan dalein
      'template_rn3ohsq',  // Step 2: Dashboard wali Template ID yahan dalein
      templateParams,
      '0waI6WDZ8YtTaoGUB'    // Step 3: Account settings se Public Key yahan dalein
    )
    .then((response) => {
      toast.success("Proposal Sent Successfully! ✅");
      e.target.reset(); // Form clear ho jayega
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
    <ToastContainer theme="dark" position="bottom-right" />
    <section id="contact" className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 lg:px-20 py-20 lg:py-0 overflow-x-hidden font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-10 items-start lg:items-center">
        
        {/* LEFT SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-[#4ade80] text-xs md:text-sm font-bold uppercase tracking-[0.4em] flex items-center gap-2">
              <FaBriefcase /> Hiring Portal
            </h2>
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-black leading-tight uppercase">
              Ready to <br /> <span className="text-[#4ade80]">Collaborate?</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-md:max-w-md">
              Fill the form and let's discuss your next big move.
            </p>
          </div>

          <div className="flex gap-6 md:gap-8 pt-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.1, color: social.hoverColor }}
                className="text-3xl md:text-4xl text-gray-600 transition-all cursor-pointer"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] p-6 md:p-10 rounded-[2rem] border border-gray-800 shadow-2xl w-full"
        >
          <form onSubmit={sendEmail} className="space-y-5 md:space-y-6">
            
            {/* Expertise */}
            <div>
              <label className="text-gray-500 text-[10px] font-bold uppercase mb-3 block">Expertise</label>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <button
                    key={s} type="button"
                    onClick={() => setSelectedService(s)}
                    className={`px-3 py-2 rounded-xl border text-[10px] font-bold transition-all ${
                      selectedService === s ? 'bg-[#4ade80] text-black border-[#4ade80]' : 'text-gray-500 border-gray-800 hover:border-gray-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Work Mode */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {modes.map((m) => (
                <button
                  key={m.id} type="button"
                  onClick={() => setWorkMode(m.id)}
                  className={`flex flex-col items-center py-2 rounded-2xl border transition-all ${
                    workMode === m.id ? 'border-[#4ade80] text-[#4ade80] bg-[#4ade80]/5' : 'border-gray-800 text-gray-500 hover:border-gray-400'
                  }`}
                >
                  <span className="text-xl">{m.icon}</span>
                  <span className="text-[9px] font-bold uppercase mt-1">{m.label}</span>
                </button>
              ))}
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="company_name" type="text" placeholder="Company Name" required className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-3 text-sm text-white focus:border-[#4ade80] outline-none" />
              <input name="user_email" type="email" placeholder="Official Email" required className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-3 text-sm text-white focus:border-[#4ade80] outline-none" />
              <input name="salary" type="text" placeholder="Salary (Ex: $2k/mo)" className="md:col-span-2 w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-3 text-sm text-white focus:border-[#4ade80] outline-none" />
            </div>

            <textarea name="requirements" rows="3" placeholder="Job Requirements..." className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-3 text-sm text-white focus:border-[#4ade80] outline-none resize-none"></textarea>

            <motion.button 
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#4ade80] disabled:bg-gray-600 text-black font-black py-3 rounded-xl flex items-center justify-center gap-3 uppercase tracking-widest text-xs transition-colors"
            >
              {loading ? "Sending..." : "Send Proposal"} <FaPaperPlane />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Contact;