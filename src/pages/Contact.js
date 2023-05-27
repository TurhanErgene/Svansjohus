import React from "react";
import { motion } from "framer-motion";
import home from "../pictures/home.jpg";

const Contact = () => {
  const handleEmailClick = () => {
    const email = "info@nimantran.se";
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <img
            alt="home"
            src={home}
            className="h-56 w-auto mt-4 mx-auto rounded-lg shadow-xl shadow-amber-900/40"
          ></img>
        </div>

        <div className="my-16">
          <h1 className="text-4xl font-bold text-red-900 drop-shadow-xl">Contact us</h1>
          <p className="mt-4 text-font text-lg drop-shadow-lg ">
            We are a local rental company dedicated to providing affordable
            rentals to our community.
          </p>
        </div>

        <div className="my-20">
          <h2 className="text-font text-2xl font-semibold drop-shadow-xl">Our Address</h2>
          <p className="text-font text-lg font-normal drop-shadow-lg">
            {" "}
            Svaneholm 295, 274 91 Skurup, Skåne Län, Sweden
          </p>
        </div>

        <div className="my-20">
          <h2 className="text-font text-2xl font-semibold drop-shadow-lg">Email</h2>
          <p
            onClick={handleEmailClick}
            className="text-font text-lg font-medium underline cursor-pointer drop-shadow-lg"
          >
            info@nimantran.se
          </p>
        </div>

        <div className="my-16">
          <h2 className="text-font text-2xl font-semibold drop-shadow-lg">Telephone</h2>
          <p className="text-font text-lg font-normal underline drop-shadow-lg">
            +46 (0) 73-510 85 04
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
