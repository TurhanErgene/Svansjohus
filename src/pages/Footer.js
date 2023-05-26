import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const handleEmailClick = () => {
    const email = "info@nimantran.se";
    window.location.href = `mailto:${email}`;
  };

  return (
    <motion.footer
      className="bg-orange-950 text-white rounded-lg shadow-md m-2 shadow-amber-900/40 bg-opacity-95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-6 py-4">
        <div className="flex justify-center space-x-3">
          {/* <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a> */}

          <button onClick={handleEmailClick} className="hover:text-gray-300">
            <p class="flex items-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-1 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              info@nimantran.se
            </p>
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
/* 
<motion.footer
      className="bg-orange-950 text-white rounded-lg shadow m-2 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl mx-auto p-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold p-4">Svansjöhus</h2>

          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </li>
              <li>
                <button
                  onClick={handleEmailClick}
                  className="hover:text-gray-300"
                >
                  info@nimantran.se
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>


      <div className="p-1 text-center bg-yellow-800">
        © 2023 Copyright:
        <a className="text-whitehite ml-1 font-semibold" href="https://www.linkedin.com/in/turhan-e-b25916113/">
        Turhan E.
        </a>
      </div>


    */
