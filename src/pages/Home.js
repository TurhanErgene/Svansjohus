import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold text-gray-800">
        Välkommen till Svaneholm
      </h1>
      <p className="mt-4 text-gray-600">Lorem ipsum dolor sit</p>
    </motion.div>
  );
};

export default Home;
