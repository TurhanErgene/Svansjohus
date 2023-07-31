import React from "react";
import { motion } from "framer-motion";
import Map from "./Components/Map";

const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-red-900 drop-shadow-xl mt-6 mb-2">
            About us
          </h1>
          <p className="mt-4 text-font text-lg drop-shadow-lg w-4/6 md:w-2/6 mb-6">
            Svansjöhus is nestled in an idyllic location in Skurup surrounded by
            the beautiful wild natural beauty of southern Sweden. Located 500
            meters from the Svaneholm Slott and 5 mins distance from a shopping
            center, it is a perfect location for all kinds of social events. The
            hall itself can seat around 100 persons. Well equipped with all the
            amenities and an event manager who can tailor make your needs, this
            tranquil place is perfect to create memories.
          </p>
        </div>
      </motion.div>
      <div className="h-56 w-full mb-64 md:mb-64">
        <Map />
      </div>
    </div>
  );
};

export default About;
