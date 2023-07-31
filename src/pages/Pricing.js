import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

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
              Welcome to our stunning event venue!
            </h1>
            <p className="mt-4 text-font text-lg drop-shadow-lg">
              <div className="text-justify mb-1">
                For a limited time, we are thrilled to offer our summer special!
                Book your event before the end of August 2023, and you'll enjoy an
                exclusive rate of just{" "}
              </div>
              <span className="text-2xl font-bold">8000 SEK per day</span>.{" "}
              <br />
              <br />
              <div className="text-justify my-2 drop-shadow-md">
                Our regular rate for a full day's rental is{" "}
                <span className="line-through">10000 SEK</span>, so you can see
                the exceptional value this summer deal presents. Don't miss out
                on this chance to secure your preferred date and enjoy
                significant savings.
              </div>
              <div className="text-justify my-16 drop-shadow-md">
                This incredible offer provides you with the perfect opportunity
                to seize the moment and plan your memorable gathering at an
                unbeatable price.
              </div>
            </p>
          </div>
          <button
            onClick={handleContactClick}
            className="h-16 mb-6 text-4xl font-bold drop-shadow-lg hover:drop-shadow-lg text-font transform hover:-rotate-2 hover:rounded-2xl hover:shadow-amber-900/40 duration-300 cursor-pointer hover:text-5xl transition-all"
          >
            Contact Us!
          </button>
          <div className="my-10 mx-12 mb-24 ">
            <h2 className="text-font my-2 text-2xl font-bold drop-shadow-lg">
              Pricing
            </h2>
            <p className="text-font text-lg font-normal drop-shadow-md text-justify">
              Interested in hosting your event at our venue? Contact us with the
              details for the kind of event you are planning and the number of
              guests, and we can provide you with a personalized price quote.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
