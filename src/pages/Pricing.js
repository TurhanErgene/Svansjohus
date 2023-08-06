import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    const email = "info@nimantran.se";
    window.location.href = `mailto:${email}`;
  };

  const handleContactClick = () => {
    navigate("/contact-us");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-2xl">
          <div className="my-16 mx-10">
            <h1 className="text-5xl font-bold text-red-900 drop-shadow-lg mb-20">
              Välkommen till vår fantastiska eventlokal!{" "}
            </h1>
            <p className="mt-4 text-font text-lg drop-shadow-lg">
              <div className="text-justify mb-1">
                Under en begränsad tid är vi stolta över att kunna erbjuda vår
                sommarspecial! Boka ditt evenemang före slutet av augusti, och
                du kommer få det exklusiva priser på heldagshyra för{" "}
              </div>
              <span className="text-2xl font-bold">10 000 per dag.</span>.{" "}
              <br />
              <br />
              <div className="text-justify my-2 drop-shadow-md">
                Vårt ordinarie pris på en heldagshyra är{" "}
                <span className="line-through">12 500 kr</span>, så du kan se
                det exceptionella värdet som detta sommarerbjudande presenterar.
                Missa inte denna chans att säkra ditt föredragna datum och njuta
                av betydande besparingar.
              </div>
              <div className="text-justify my-16 drop-shadow-md">
                Detta otroliga erbjudande ger dig det perfekta tillfället att
                fånga ögonblicket och planera din minnesvärda sammankomst till
                ett oslagbart pris.
              </div>
            </p>
          </div>
          <button
            onClick={handleContactClick}
            className="h-16 mb-6 text-4xl font-bold drop-shadow-lg hover:drop-shadow-lg text-font transform hover:-rotate-2 hover:rounded-2xl hover:shadow-amber-900/40 duration-300 cursor-pointer hover:text-5xl transition-all"
          >
            Kontakta oss!
          </button>
          <div className="my-10 mx-12 mb-24 ">
            <h2 className="text-font my-2 text-2xl font-bold drop-shadow-lg">
              Prisförslag
            </h2>
            <p className="text-font text-lg font-normal drop-shadow-md text-justify">
              Intresserad av att hålla ett evenemang hos oss men behöver lite
              hjälp att anordna det? Kontakta oss på{" "}
              <button
                onClick={handleEmailClick}
                className="font-semibold"
              >
                <span >
                  <p className="font-medium underline hover:text-orange-800">info@nimantran.se</p>
                </span>
              </button>{" "}
              med detaljer för vilken typ av evenemang du planerar, antal gäster
              och vad du vill ha hjälp med att anordna, så kan vi ge dig ett
              personligt prisförslag.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
