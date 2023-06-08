import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiChatAlt2 } from 'react-icons/hi';
import { FiX } from 'react-icons/fi';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 ">
      <Transition
        show={isOpen}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="relative">
          {/* Chatbot content */}
          <div className="bg-white rounded-lg p-4 w-64 sm:w-80 mb-8 mr-8 shadow-xl shadow-amber-900/40">
            {/* Chatbot header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-font">Chatbot</h3>
              <button
                onClick={toggleChatbot}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                <FiX className="text-gray-600" />
              </button>
            </div>

            {/* Chatbot body */}
            <div className="h-48"> {/* Replace with chatbot conversation UI */}</div>

            {/* Chatbot footer */}
            <div className="mt-4">
              <button
                className="bg-amber-800 hover:bg-amber-900 text-white rounded-lg py-2 px-4 transition-colors duration-300"
                onClick={() => alert('Booking appointment')}
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </Transition>

      {/* Chatbot toggle button */}
      <button
        onClick={toggleChatbot}
        className="bg-amber-800 hover:bg-amber-900 text-white rounded-full p-2 fixed bottom-6 right-6 shadow-md transition-colors duration-300"
      >
        {isOpen ? <FiX className="text-xl" /> : <HiChatAlt2 className="text-xl" />}
      </button>
    </div>
  );
};

export default Chatbot;
