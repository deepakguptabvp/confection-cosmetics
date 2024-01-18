import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-stone-500 shadow-md">
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

          {/* <div> */}
            <div className="max-w-screen-xl  px-2 py-1">
              <div className="flex flex-auto items-center">
                <form>
                  <label
                    htmlFor="default-search"
                    className=" text-sm font-medium sr-only bg-stone-500 dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-96 p-4 ps-10 text-sm  border border-stone-300 rounded-lg bg-stone-50 focus:ring-stone-500 focus:border-stone-500 dark:bg-gray-300 dark:border-stone-600 dark:placeholder-stone-400 dark:text-black dark:focus:ring-stone-500 dark:focus:border-stone-500"
                      placeholder="Search Cosmetics, Confectionery..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2 top-2 bottom-2 bg-stone-700 hover:bg-stone-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-stone-400 dark:hover:bg-stone-700 dark:focus:ring-stone-700"
                    >
                      Search
                    </button>
                  </div>
                </form>

                {/* <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
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
                </ul> */}
              </div>
            </div>
          {/* </div> */}

          <div className="flex items-center space-x-6 rtl:space-x-reverse mr-3">
            {/* <button>
              <FaShoppingCart className="text-xl md:text-2xl dark:text-white" />
            </button> */}
            <button
              type="button"
              className="text-white bg-stone-700  hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-stone-400 dark:hover:bg-stone-700 dark:focus:ring-stone-400"
            >
              <svg
                className="w-3.5 h-3.5 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
              </svg>
              Buy now
            </button>

            {/* <Link
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </Link> */}
            <Link
              href="/"
              className="text-lg text-stone-900  dark:invert  hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Navbar menu Home/About/contact.... */}
      <div className="bg-stone-300 shadow-md dark:bg-stone-500">
        <div className="max-w-screen-xl p-3 flex md:flex-row flex-wrap justify-center  dark:bg-stone-700 mx-auto">
          <div className="flex justify-center">
            <ul className="flex flex-wrap gap-10 font-medium mt-0 text-sm">
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
                  href="/cosmetics/dove"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Dove
                </Link>
              </li>
              <li>
                <Link
                  href="/cosmetics/loreal"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Loreal
                </Link>
              </li>
              <li>
                <Link
                  href="/cosmetics/lotus"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Lotus
                </Link>
              </li>
              <li>
                <Link
                  href="/cosmetics/garnier"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Garnier
                </Link>
              </li>
              <li>
                <Link
                  href="/cosmetics/indulekha"
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
