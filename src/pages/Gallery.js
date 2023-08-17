import React, { useState } from "react";
import { motion } from "framer-motion";
import pic1 from "../pictures/pic1.jpg";
import pic3 from "../pictures/pic3.jpg";
import pic4 from "../pictures/pic4.jpg";
import pic5 from "../pictures/pic5.jpg";
import pic6 from "../pictures/pic6.jpg";
import pic7 from "../pictures/pic7.jpg";
import pic8 from "../pictures/pic8.jpg";
import pic9 from "../pictures/pic9.jpg";
import pic10 from "../pictures/pic10.jpg";
import pic11 from "../pictures/pic11.jpg";
import pic12 from "../pictures/pic12.jpg";
import pic13 from "../pictures/pic13.jpg";
import pic14 from "../pictures/pic14.jpg";
import pic15 from "../pictures/pic15.jpg";
import pic16 from "../pictures/pic16.jpg";
import pic19 from "../pictures/pic19.jpg";
import pic20 from "../pictures/pic20.jpg";
import pic21 from "../pictures/pic21.jpg";
import pic22 from "../pictures/pic22.jpg";
import pic23 from "../pictures/pic23.jpg";

const pictures = [
  pic21,
  pic20,
  pic22,
  pic23,
  pic1,
  pic19,
  pic16,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic9,
  pic8,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
];

const PicturePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState("");

  const openPicture = (picture) => {
    setIsOpen(true);
    setSelectedPicture(picture);
  };

  const closePicture = () => {
    setIsOpen(false);
    setSelectedPicture("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 mx-14 mb-16">
        {pictures.map((picture, index) => (
          <motion.img
            key={index}
            src={picture}
            alt={`Picture ${index + 1}`}
            className="w-full h-full object-cover cursor-pointer rounded-md shadow-md shadow-amber-900/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() => openPicture(picture)}
          />
        ))}

        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 "
            onClick={closePicture}
          >
            <img
              src={selectedPicture}
              alt="Local pictures"
              className="max-w-full max-h-full"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PicturePage;