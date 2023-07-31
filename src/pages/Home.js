import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import pic1 from "../pictures/pic1.jpg";
import pic5 from "../pictures/pic5.jpg";
import pic3 from "../pictures/pic3.jpg";
import pic4 from "../pictures/pic4.jpg";

const pictures = [pic5, pic1, pic4, pic3];

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
    //h-screen
    <div>
      <section className="flex items-center justify-center my-4 max-w-full h-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentPictureIndex}
            src={pictures[currentPictureIndex]}
            alt="Landing Picture"
            className="rounded-lg shadow-xl shadow-amber-900/40 h-full max-w-full" //h-full
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
            <h2 className="text-3xl font-semibold text-red-950 drop-shadow-xl">
              Welcome to{" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-950 relative inline-block">
                <span className="relative text-white italic">Svansjöhus!</span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="mt-8 ml-auto mr-auto mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-gray-100 p-6 rounded-lg md:w-3/5 w-4/5 mx-auto shadow-lg shadow-amber-900/40 bg-opacity-80 px-6 md:px-12 pb-8 md:pb-12">
              <h3 className="text-xl font-semibold py-2 text-red-950">
                Detta erbjuder vi:
              </h3>
              <br />
              <ul className="list-disc list-inside text-justify text-font mt-2">
                <li>Gratis parkering (10–12 bilar får plats)</li>
                <br />
                <li>
                  Alkohol får medhavas i lokalen. Ta med den typ av dryck du
                  vill konsumera vid evenemanget. Dryck erbjuds inte på plats
                  och eventarrangören erbjuder inte hjälp med beställning av
                  dryck, men gärna med annat.
                </li>
                <br />
                <li>
                  Fri matplanering: Ta med eller beställ den typ av mat du vill
                  konsumera vid evenemanget. Mattjänster erbjuds inte på plats,
                  men eventarrangören erbjuder gärna sina tjänster för att
                  organisera detta å era vägnar.
                </li>
                <br />
                <li>För flera bilar finns gratis parkering 500 meter bort.</li>
                <br />
                <li className="font-medium">
                  Om intresserad mejla{" "}
                  <span className="font-semibold text-red-950 hover:text-orange-800 cursor-pointer underline">
                    info@nimantran.se
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
