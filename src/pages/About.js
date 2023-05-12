import React from 'react'
import { motion } from 'framer-motion';


const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      <p className="mt-4 text-gray-600">We are a local rental company dedicated to providing affordable rentals to our community.</p>
    </motion.div>
  );
}

export default About