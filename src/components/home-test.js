/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "flowbite";
import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";
import slide4 from "../images/slide-4.png";
import slide5 from "../images/slide-5.jpg";
import slide6 from "../images/slide-6.png";
import bubuhanlogo from "../images/bubuhanlogo.svg";

export default function Example() {
  return (
    <html class="dark">
      <head>
        <meta property="og:title" content="__OG_TITLE__" />
        <meta property="og:description" content="__OG_DESCRIPTION__" />
      </head>

      <main className="head-section dark:bg-black">
          <div className="relative px-2 lg:px-8">
            <div className="mx-auto max-w-5xl pt-20 pb-8 sm:pt-24 sm:pb-12">
              <div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-slate-800 hover:ring-teal-900">
                    <span className="text-slate-400">
                      Announcing our new journey:{" "}
                      <a href="#" className="font-semibold text-emerald-400">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Bubuhan News
                      </a>
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-white">
                    Bubuhan Crypto
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-center">
                    Learn what you invest. Invest what you learn.
                  </p>

                  <div className="justify-center py-8">
                    <img
                      class="max-w-full h-auto"
                      src={slide6}
                      alt="image description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      <main className="marketing-section dark:bg-black">
        <div className="">
          <div className="mx-auto max-w-7xl py-0 px-8 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-24">
            <div>
              <h2 className="flex-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">Latest Article</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="blog-list">
          <div className="mx-auto max-w-7xl py-6 px-8 sm:px-6 lg:flex  lg:justify-between lg:py-2 lg:px-16">
            <div className="left-content flex-auto px-0 lg:px-2">
              <div class="py-4 px-2 lg:p-6   rounded-lg shadow-md hover:dark:bg-gray-800/20 hover:ring-1 hover:ring-slate-800">
                <span class="bg-gray-400 text-gray-800 text-xs inline-flex items-center px-2.5 py-1 rounded mr-2 dark:bg-gray-900 dark:text-gray-500">
                  <svg
                    aria-hidden="true"
                    class="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  3 days ago
                </span>
                <a href="#">
                  <p class="pt-4 text-base mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
                    Crafting a design system for a multiplanetary future
                  </p>
                </a>
                <p class=" text-gray-500 dark:text-gray-400">
                  Most companies try to stay ahead of the curve when it comes to
                  visual design.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center text-emerald-600 pt-4"
                >
                  Read more
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    class="ml-1 h-4 w-4 stroke-current"
                  >
                    <path
                      d="M6.75 5.75 9.25 8l-2.5 2.25"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="py-4 px-2 lg:p-6 rounded-lg shadow-md hover:dark:bg-gray-800/20 hover:ring-1 hover:ring-slate-800">
                <span class="bg-gray-400 text-gray-800 text-xs inline-flex items-center px-2.5 py-1 rounded mr-2 dark:bg-gray-900 dark:text-gray-500">
                  <svg
                    aria-hidden="true"
                    class="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  3 days ago
                </span>
                <a href="#">
                  <p class="pt-4 text-base mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
                    Crafting a design system for a multiplanetary future
                  </p>
                </a>
                <p class=" text-gray-500 dark:text-gray-400">
                  Most companies try to stay ahead of the curve when it comes to
                  visual design.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center text-emerald-600 pt-4"
                >
                  Read more
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    class="ml-1 h-4 w-4 stroke-current"
                  >
                    <path
                      d="M6.75 5.75 9.25 8l-2.5 2.25"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="py-4 px-2 lg:p-6 rounded-lg shadow-md hover:dark:bg-gray-800/20 hover:ring-1 hover:ring-slate-800">
                <span class="bg-gray-400 text-gray-800 text-xs inline-flex items-center px-2.5 py-1 rounded mr-2 dark:bg-gray-900 dark:text-gray-500">
                  <svg
                    aria-hidden="true"
                    class="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  3 days ago
                </span>
                <a href="#">
                  <p class="pt-4 text-base mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
                    Crafting a design system for a multiplanetary future
                  </p>
                </a>
                <p class=" text-gray-500 dark:text-gray-400">
                  Most companies try to stay ahead of the curve when it comes to
                  visual design.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center text-emerald-600 pt-4"
                >
                  Read more
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    class="ml-1 h-4 w-4 stroke-current"
                  >
                    <path
                      d="M6.75 5.75 9.25 8l-2.5 2.25"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="right-content pt-12  w-max lg:w-96 lg:pr-8 lg:pt-0 ">
              <div class="max-w-md  p-4  rounded-lg shadow-md sm:p-8 ring-1 ring-slate-800">
                <div class="flex items-center justify-between mb-4 ">
                  <h5 class="text-xl flex-1 font-bold leading-none text-gray-900 dark:text-white">
                    Categories
                  </h5>
                  <a href="#" class="text-sm hover:underline dark:text-white">
                    View all
                  </a>
                </div>
                <div class="flow-root">
                  <ul
                    role="list"
                    class="divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <li class="py-3X sm:py-1">
                      <div class="flex items-start">
                        <ul>
                          <li class="py-1">
                            <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                              Crypto-101
                            </span>
                            <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                              News
                            </span>
                            <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                              DeFi
                            </span>
                            <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                              NFTs
                            </span>
                          </li>
                          <li class="py-1">
                            <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                              Airdrop
                            </span>
                            <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                              Article
                            </span>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="subscribe py-4 inline-center">
                <div>
                  <p className="text-white text-sm">Subscribe to our article</p>
                </div>
                <div>
                  <form>
                    <label
                      for="search"
                      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="search"
                        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-800 dark:focus:border-emerald-800"
                        placeholder="Email Address"
                        required
                      />
                      <button
                        type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-emerald-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-emerald-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <main class="footer dark:bg-black pt-0 lg:pt-24">
        <footer class=" px-4 py-4 lg:px-80 lg:py-8 dark:bg-black">
          <div class=" sm:flex sm:items-center sm:justify-between ">
            <a href="#" class="flex items-center mb-4 sm:mb-0">
              <img src={bubuhanlogo} class="mr-3 h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Bubuhan.
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Bubuhan™
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </main> */}
    </html>
  );
}

<script src="../path/to/flowbite/dist/flowbite.js"></script>;
