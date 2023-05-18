import React, { useState } from 'react';
import { motion } from 'framer-motion';
import pic1 from '../pictures/pic1.jpg';
import pic3 from '../pictures/pic3.jpg';
import pic4 from '../pictures/pic4.jpg';

const pictures = [pic1, pic3, pic4];

const PicturePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState('');

  const openPicture = (picture) => {
    setIsOpen(true);
    setSelectedPicture(picture);
  };

  const closePicture = () => {
    setIsOpen(false);
    setSelectedPicture('');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-3">
      {pictures.map((picture, index) => (
        <motion.img
          key={index}
          src={picture}
          alt={`Picture ${index + 1}`}
          className="w-full h-full object-cover cursor-pointer"
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