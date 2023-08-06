import React from "react";
import { motion } from "framer-motion";
import home from "../pictures/home.jpg";

const Contact = () => {
  const handleEmailClick = () => {
    const email = "info@nimantran.se";
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <img
            alt="home"
            src={home}
            className="md:h-60 h-36 w-auto mt-4 mx-auto rounded-lg shadow-xl shadow-amber-900/40 " //h-full max-w-full
          ></img>
        </div>
        <div className="mx-12">
          <div className="my-16">
            <h1 className="text-4xl font-bold text-red-900 drop-shadow-xl">
              Kontakta oss
            </h1>
            <p className="mt-4 text-font text-lg drop-shadow-lg ">
              Vi är ett lokalt uthyrningsföretag som är dedikerade till att
              tillhandahålla prisvärd lokalhyra till vårt samhälle.
            </p>
          </div>

          <div className="my-20">
            <h2 className="text-font text-2xl font-semibold drop-shadow-xl">
              Vår adress
            </h2>
            <p className="text-font text-lg font-normal drop-shadow-lg">
              {" "}
              Svaneholm 295, 274 91 Skurup, Skåne Län, Sweden
            </p>
          </div>
        </div>

        <div className="my-20">
          <h2 className="text-font text-2xl font-semibold drop-shadow-lg">
            Email
          </h2>
          <p onClick={handleEmailClick}>
            <span className="text-font text-lg font-medium underline cursor-pointer drop-shadow-lg hover:text-xl transition-all">
              info@nimantran.se
            </span>
          </p>
        </div>

        <div className="my-16">
          <h2 className="text-font text-2xl font-semibold drop-shadow-lg">
            Telefon
          </h2>
          <p className="text-font text-lg font-normal underline drop-shadow-lg">
            +46 (0) 73-510 85 04
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
