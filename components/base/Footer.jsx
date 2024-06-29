import React from "react";

const Footer = () => {
  return (
    <footer className=" rounded-lg shadow m-4 bg-gradient-to-l from-black via-gray-900 to-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm  sm:text-center text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Randil Tharusha Withanage
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
