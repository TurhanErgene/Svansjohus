import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import pic1 from "../pictures/pic1.jpg";
import pic2 from "../pictures/pic2.jpg";
import pic3 from "../pictures/pic3.jpg";
import pic4 from "../pictures/pic4.jpg";

const pictures = [pic1, pic2, pic3, pic4];

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
              <h3 className="text-xl font-semibold">Engelska</h3>
              <p>
                Svansjöhus is nestled in an idyllic location in Skurup
                surrounded by the beautiful wild natural beauty of southern
                Sweden. Located 50 meters from the Svaneholm Slott and 5 mins
                distance from a shopping center, it is a perfect location for
                all kinds of social events. The hall itself can seat around 100
                persons . Well equipped with all the amenities and an event
                manager who can tailor make your needs, this tranquil place is
                perfect to create memories. We offer Free parking on the grounds
                for 10-12 cars. Free parking 50 meters away from the venue You
                can bring your own drinks. We do not offer any You can bring
                your own food. We can also assist you find a caterer
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg w-4/5 mx-auto">
              <h3 className="text-xl font-semibold">Svenska</h3>
              <p>
                Svansjöhus är beläget på en idyllisk plats i Skurup och omges av
                vacker vild natur som bara återfinns i Skåne. Med 50 meter till
                Svaneholms slott och 5 minuters gångavstånd till ett centrum med
                diverse mataffärer och dylikt är det en perfekt destination för
                alla typer av sociala event. Lokalens kapacitet är 100 personer
                och den är välutrustad. Dessutom finns en eventarrangör som
                skräddarsyr allt efter dina behov. Skapa vackra minnen här hos
                oss. Detta erbjuder vi: Gratis parkering (10–12 bilar får plats)
                Alkohol får medhavas i lokalen. Ta med den typ av dryck du vill
                konsumera vid evenemanget. Dryck erbjuds inte på plats och
                eventarrangören erbjuder inte hjälp med beställning av dryck,
                men gärna med annat. Fri matplanering: Ta med eller beställ den
                typ av mat du vill konsumera vid evenemanget. Mattjänster
                erbjuds inte på plats, men eventarrangören erbjuder gärna sina
                tjänster för att organisera detta å era vägnar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
