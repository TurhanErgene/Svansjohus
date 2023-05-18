import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const handleEmailClick = () => {
    const email = 'info@company.com';
    window.location.href = `mailto:${email}`;
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Company Name</h2>
            <p className="mt-2">123 Main Street, City, Country</p>
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
                <a href="/services" className="hover:text-gray-300">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </li>
              <li>
                <button
                  onClick={handleEmailClick}
                  className="hover:text-gray-300"
                >
                  Email
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