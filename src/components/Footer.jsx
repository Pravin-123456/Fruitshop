import React from "react";
import Divider from "./Divider";

const Footer = () => {
  return (
    <div className="w-5/6 mx-auto my-10">
      <Divider title={"Find us on"} />

      <footer className="bg-white dark:bg-gray-800 w-full py-8">
        <div className="max-w-screen-xl px-4 mx-auto">
          <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="/faq"
              >
                FAQ
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="/configuration"
              >
                Configuration
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="/branches"
              >
                Branches
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="/contact"
              >
                Contact us
              </a>
            </li>
          </ul>
          <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            >
              {/* Facebook Icon */}
              <svg /* ... Facebook SVG ... */ />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            >
              {/* Twitter Icon */}
              <svg /* ... Twitter SVG ... */ />
            </a>
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            >
              {/* Reddit Icon */}
              <svg /* ... Reddit SVG ... */ />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            >
              {/* LinkedIn Icon */}
              <svg /* ... LinkedIn SVG ... */ />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            >
              {/* GitHub Icon */}
              <svg /* ... GitHub SVG ... */ />
            </a>
          </div>
          <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              <div className="relative">
                <input
                  type="text"
                  id="form-subscribe-Subscribe"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-center text-slate-500 dark:text-gray-200 pt-10 sm:pt-12 font-normal flex items-center justify-center">
            Copyright 2023 ©Fruitshop
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
