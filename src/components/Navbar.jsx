import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center mx-auto max-w-screen-xl p-2">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <Image
                className="w-full h-full object-cover"
                src="/company-logo.png"
                alt="Your Alt Text"
                width={200}
                height={200}
              />
            </div>
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
                      href="/confectionery"
                      className="text-gray-900 dark:text-white hover:underline"
                      aria-current="page"
                    >
                      Confectionery
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      href="/cosmetics"
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
            <button>
              <FaShoppingCart className="text-xl md:text-2xl" />
            </button>
            <Link
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </Link>
            <Link
              href="#"
              className="text-lg text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Navbar menu Home/About/contact.... */}
      <div className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl p-3 flex md:flex-row flex-wrap justify-between bg-slate-300 mx-auto">
          <div className="flex justify-between">
            <ul className="flex flex-wrap item-center justify-between font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  href="/confectionery/coffee"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Coffee
                </Link>
              </li>
              <li>
                <Link
                  href="/confectionery/bournvita"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Bournvita
                </Link>
              </li>
              <li>
                <Link
                  href="/confectionery/lactogen"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Lactogen
                </Link>
              </li>
              <li>
                <Link
                  href="/confectionery/cerelac"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Cerelac
                </Link>
              </li>
              <li>
                <Link
                  href="/confectionery/nan-pro"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Nan-Pro
                </Link>
              </li>
              <li>
                <Link
                  href="/confectionery/dove"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Dove
                </Link>
              </li>
              <li>
                <Link
                  href="/confectionery/loreal"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Loreal
                </Link>
              </li>
              <li>
                <Link
                  href="/confectionery/lotus"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Lotus
                </Link>
              </li>
              <li>
                <Link
                  href="/confectionery/garnier"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Garnier
                </Link>
              </li>
              <li>
                <Link
                  href="/confectionery/indulekha"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Indulekha
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
