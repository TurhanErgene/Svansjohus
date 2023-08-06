import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import pic1 from "../pictures/pic1.jpg";
import pic5 from "../pictures/pic5.jpg";
import pic3 from "../pictures/pic3.jpg";
import pic4 from "../pictures/pic4.jpg";

const pictures = [pic5, pic1, pic4, pic3];

const Home = () => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const handleEmailClick = () => {
    const email = "info@nimantran.se";
    window.location.href = `mailto:${email}`;
  };

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
              Välkommen till{" "}
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
              <h3 className="text-2xl font-semibold py-2 text-red-950">
                Detta erbjuder vi:
              </h3>
              <br />
              <ul className="list-disc list-inside text-justify text-font mt-2">
                <li>Gratis parkering för 10–12 bilar utanför lokalen.</li>
                <br />
                <li>
                  För fler bilar finns gratis parkering 500m bort från lokalen.
                </li>
                <br />
                <li>
                  Dryck medtagets själv och erbjuds inte på plats, egen medhav
                  alkohol är tillåten. Vi kan inte erbjuda hjälp med beställning
                  av dryck, men gärna med annat.
                </li>
                <br />
                <li>
                  Fri matplanering: Ta med, beställ eller anordna catering av
                  den typ av mat ni önskar konsumera vid evenemanget.
                  Matserveringen erbjuds inte på plats, men vi erbjuder gärna
                  tjänsten att organisera cateringen mot era önskemål.
                </li>
                <br />
                <li className="font-medium">
                  Vid intresse skicka ett mejl till{" "}
                  <button
                onClick={handleEmailClick}
                className="font-semibold"
              >
                <span >
                  <p className="font-medium underline hover:text-orange-800">info@nimantran.se</p>
                </span>
              </button>{" "}
                  med följande information:
                </li>
                <ul className="pl-5 list-disc list-inside">
                  <li className="mt-2">Vilken typ av evenemang du planerar</li>
                  <li>Antal personer</li>
                  <li>Några önskemål</li>
                  <li>Datum</li>
                </ul>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
