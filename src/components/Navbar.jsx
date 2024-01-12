import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center mx-auto max-w-screen-xl p-2">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/company-logo.png"
              className="h-11 rounded-full"
              alt="Confection-Cosmetics"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Confection-Cosmetics
            </span>
          </Link>

          <div>
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
              <div className="flex items-center">
                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-900 dark:text-white hover:underline"
                      aria-current="page"
                    >
                      Confectionery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      Cosmetics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a>
            <a
              href="#"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>

            <button>
              <FaShoppingCart className="text-xl md:text-2xl mr-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Navbar menu Home/About/contact.... */}
      {/* <div className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl p-3 text-center bg-slate-500 mx-auto">
          <div className="flex justify-between text-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default Navbar;
