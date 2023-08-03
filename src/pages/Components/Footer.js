import React from "react";
import { motion } from "framer-motion";
import logo1 from "../../pictures/logo1.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

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
        <div
          className={`container ${
            location.pathname === "/about" ? "mt-20" : "mt-6"
          }`}
        >
          <div className="flex flex-col items-center md:flex-row md:justify-around space-x-3 gap-x-10">
            {" "}
            {/* Logo */}
            <div>
              <a href="/">
                <img
                  className="h-16 w-auto" //w-8 h-8
                  src={logo1}
                  alt="logo"
                />
              </a>
            </div>
            {/* Links */}
            <div className="mt-4 md:pr-12 pr-2">
              {/* Facebook Logo */}
              <div className="inline-block transform transition-transform hover:scale-110">
                <a
                  href="https://www.facebook.com/profile.php?id=100092854124676"
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="46"
                    height="46"
                    viewBox="0 0 50 50"
                  >
                    <path
                      className=""
                      fill="#7f1d1d"
                      d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 32.380773 34.967178 39.306373 27 40.720703 L 27 29 L 30.625 29 C 31.129 29 31.555188 28.623047 31.617188 28.123047 L 31.992188 25.123047 C 32.028188 24.839047 31.938047 24.553891 31.748047 24.337891 C 31.559047 24.122891 31.287 24 31 24 L 27 24 L 27 20.5 C 27 19.397 27.897 18.5 29 18.5 L 31 18.5 C 31.552 18.5 32 18.053 32 17.5 L 32 14.125 C 32 13.607 31.604844 13.174906 31.089844 13.128906 C 31.030844 13.123906 29.619984 13 27.833984 13 C 23.426984 13 21 15.616187 21 20.367188 L 21 24 L 17 24 C 16.448 24 16 24.447 16 25 L 16 28 C 16 28.553 16.448 29 17 29 L 21 29 L 21 40.720703 C 13.032822 39.306373 7 32.380773 7 24 C 7 14.593391 14.593385 7 24 7 z"
                    ></path>
                  </svg>
                </a>
              </div>
              {/* Instagram Logo */}
              <div className="inline-block transform transition-transform hover:scale-110">
                <a
                  href="https://www.instagram.com/svansjohus/"
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="46"
                    height="46"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="#7f1d1d"
                      d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* Email */}
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
