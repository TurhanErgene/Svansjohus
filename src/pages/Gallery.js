import React, { useState } from "react";
import { motion } from "framer-motion";
import pic1 from "../pictures/pic1.jpg";
import pic2 from "../pictures/pic2.jpg";
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

const pictures = [
  pic1,
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
  pic2,
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 mx-14">
      {pictures.map((picture, index) => (
        <motion.img
          key={index}
          src={picture}
          alt={`Picture ${index + 1}`}
          className="w-full h-full object-cover cursor-pointer rounded-md shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={() => openPicture(picture)}
        />
      ))}

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
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
  );
};

export default PicturePage;
