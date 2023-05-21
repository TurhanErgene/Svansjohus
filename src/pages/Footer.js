import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const handleEmailClick = () => {
    const email = 'info@nimantran.se';
    window.location.href = `mailto:${email}`;
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white rounded-lg shadow m-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl mx-auto p-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold p-4">Svansjöhus</h2>

          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </li>
              <li>
                <button
                  onClick={handleEmailClick}
                  className="hover:text-gray-300"
                >
                  info@nimantran.se
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;