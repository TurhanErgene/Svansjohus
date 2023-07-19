import React from "react";
import { motion } from "framer-motion";
import logo1 from "../../pictures/logo1.png";

const Footer = () => {
  const handleEmailClick = () => {
    const email = "info@nimantran.se";
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <motion.footer
        className="pb-2 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container pt-6">
          <div className="flex flex-col items-center md:flex-row md:justify-around space-x-3 gap-x-10">
            {" "}
            {/* justify-around / between */}
            {/*justify-center */}
            {/* Logo */}
            <div className="">
              <a href="/">
                <img
                  className="h-16 w-auto" //w-8 h-8
                  src={logo1}
                  alt="logo"
                />
              </a>
            </div>
            {/* Links */}
            <div className="mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100093119044524"
                type="button"
                className="mx-1 h-9 w-9 rounded-full border-2 border-font uppercase leading-normal shadow-md text-font transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 "
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4 "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/svansjohus/"
                type="button"
                className="mx-1 h-9 w-9 rounded-full border-2 border-font uppercase leading-normal shadow-md text-font transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <button
              onClick={handleEmailClick}
              className="hover:text-gray-300 mt-3"
            >
              <p className="flex items-center md:justify-start text-font drop-shadow-lg shadow-amber-800/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <span className="md:pr-0 pr-3 font-semibold">
                  info@nimantran.se
                </span>
                {/* hidden md:inline */}
              </p>
            </button>
          </div>
        </div>
      </motion.footer>
      <div className="text-center text-xs mb-2 text-font">
        © 2023 Copyright:
        <a
          className="ml-1 font-semibold"
          href="https://www.linkedin.com/in/turhan-e-b25916113/"
        >
          Turhan E.
        </a>
      </div>
    </div>
  );
};

export default Footer;
