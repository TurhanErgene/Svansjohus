import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems = [
    { label: "Home", link: "/" },
    {
      label: "Services",
      link: "/",
      dropdownItems: [
        { label: "Web Design", link: "/" },
        { label: "Graphic Design", link: "/" },
        { label: "Marketing", link: "/" },
      ],
    },
    { label: "About", link: "/" },
    { label: "Contact", link: "/" },
  ];

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navbarItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.link}
                      className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    >
                      {item.label}
                    </a>
                    {item.dropdownItems && (
                      <div className="hidden absolute mt-1 w-56 rounded-md bg-white shadow-lg">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Hamburger menu */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
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
                  className="block h-6 w-6"
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

      {/* Side menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={isOpen ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 0.2 }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {navbarItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.link}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                {item.label}
              </a>
              {item.dropdownItems && (
                <div className="ml-3 mt-1">
                  {item.dropdownItems.map((dropdownItem) => (
                    <a
                      key={dropdownItem.label}
                      href={dropdownItem.link}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
