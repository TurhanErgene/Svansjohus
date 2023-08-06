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
            Om oss
          </h1>
          <p className="mt-4 text-font text-lg drop-shadow-lg w-4/6 md:w-2/6 mb-6">
            Svansjöhus ligger inbäddat i ett idylliskt läge i Skurup omgivet av
            den vackra vilda naturen i södra Sverige. Beläget 500 meter från
            Svaneholms Slott och 5 minuters avstånd från ett köpcentrum. Det är
            ett perfekt läge för alla typer av sociala evenemang. Själva salen
            har plats för cirka 100 personer. Den är välutrustad med alla
            bekvämligheter och en evenemangschef som kan skräddarsy dina behov,
            denna lugna plats är perfekt för att skapa minnen.
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
