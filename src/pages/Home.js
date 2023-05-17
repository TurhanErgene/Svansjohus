import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import pic1 from '../pictures/pic1.jpg';
import pic2 from '../pictures/pic2.jpg';
import pic3 from '../pictures/pic3.jpg';
import pic4 from '../pictures/pic4.jpg';


const pictures = [
  pic1,
  pic2,
  pic3,
  pic4,
];

const Home = () => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <section className="h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentPictureIndex}
            src={pictures[currentPictureIndex]}
            alt="Landing Picture"
            className="rounded-lg shadow-xl h-full max-w-full" //h-full
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-semibold">Welcome to Our Website!</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-8 ml-auto mr-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-gray-100 p-4 rounded-lg w-4/5 mx-auto">
              <h3 className="text-xl font-semibold">Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg w-4/5 mx-auto">
              <h3 className="text-xl font-semibold">Feature 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;