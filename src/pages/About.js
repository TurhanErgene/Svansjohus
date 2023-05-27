import React from 'react'
import { motion } from 'framer-motion';
import Map from './Map';


const About = () => {
  return (
    <div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      <p className="mt-4 text-gray-600">We are a local rental company dedicated to providing affordable rentals to our community.</p>
    </motion.div>
      <Map/>
    </div>
  );
}

export default About