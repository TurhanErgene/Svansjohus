import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../pictures/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems = [
    {
      label: "Hem",
      link: "/",
    },
    {
      label: "Priser",
      link: "/Pricing",
    },
    {
      label: "Om oss",
      link: "/about",
    },
    {
      label: "Bilder",
      link: "/gallery",
    },
    {
      label: "Events",
      link: "/events",
    },
    {
      label: "Kontakta oss",
      link: "/contact-us",
    },
  ];

  const navLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="rounded-lg m-3">
      {/* Desktop version */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 drop-shadow-lg shadow-amber-900/40">
            <a href="/">
              <img
                className="h-60 mt-5 w-auto" //w-8 h-8
                src={logo}//"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="logo"
              />
            </a>
          </div>

          {/* Navigation items */}
          <div className="hidden md:block">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-end md:flex-1 space-x-10"
            >
              {navbarItems.map((item) => (
                <div key={item.label} className="relative ">
                  <a
                    href={item.link}
                    className="p-4 text-md font-semibold drop-shadow-lg text-font hover:rounded-2xl hover:shadow-md hover:shadow-amber-900/40 duration-300"
                  >
                    {item.label}
                  </a>
                  {/* {item.dropdownItems && (
                    <div className="absolute top-full z-10 hidden py-1 bg-gray-800 rounded-md shadow-lg">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.link}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-font"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )} */}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hamburger menu */}
          <div className="md:hidden">
            <motion.button
              initial={{ rotate: 0 }}
              animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-amber-900 rounded-md hover:text-font  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-900"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navbarItems.map((item) => (
            <div key={item.label} className="relative">
              <a
                href={item.link}
                className="block px-3 py-2 text-lg font-semibold drop-shadow-lg text-font rounded-md"//hover:rounded-2xl hover:shadow-md hover:shadow-amber-900/40
              >
                {item.label}
              </a>
              {/* {item.dropdownItems && (
                <div className="absolute top-full z-10 hidden py-1 bg-gray-800 rounded-md shadow-lg">
                  {item.dropdownItems.map((dropdownItem) => (
                    <a
                      key={dropdownItem.label}
                      href={dropdownItem.link}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
