/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";
import "flowbite";
import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";
import slide4 from "../images/slide-4.png";
import slide5 from "../images/slide-5.jpg";
import slide6 from "../images/slide-6.png";

export default function Blog() {
  return (
    <>
      <main className="marketing-section dark:bg-black">
        <main className="head-section">
          <div className="relative px-2 lg:px-8">
            <div className="mx-auto max-w-5xl pt-6 pb-6 sm:pt-10 sm:pb-10">
              <h1 className="text-4xl mx-1 py-8 font-bold tracking-tight sm:text-left sm:text-5xl text-white">
                Crafting a design system for a multiplanetary future
              </h1>
              <div className="text-1xl mx-1 sm:pb-4 sm:text-gray-500">
                15 December 2022
              </div>
              <div className="text-1xl font-bold mx-1 sm:text-gray-500">
                Share{" "}
                <a href="https://www.twitter.com/">
                  <SocialIcon
                    network="twitter"
                    bgColor="#fff"
                    style={{ height: 30, width: 30, margin: 5 }}
                  />
                </a>
                <a href="https://www.facebook.com/">
                  <SocialIcon
                    network="facebook"
                    bgColor="#fff"
                    style={{ height: 30, width: 30, margin: 5 }}
                  />
                </a>
                <a href="https://www.discord.com/">
                  <SocialIcon
                    network="discord"
                    bgColor="#fff"
                    style={{ height: 30, width: 30, margin: 5 }}
                  />
                </a>
              </div>
              <div className="justify-center py-8">
                <img
                  className="max-w-full h-auto"
                  src={slide6}
                  alt="image description"
                />
              </div>
              <div className="text-2xl mx-6 sm:text-justify text-white">
                <p>
                  Most companies try to stay ahead of the curve when it comes to
                  visual design. Most companies try to stay ahead of the curve
                  when it comes to visual design. Most companies try to stay
                  ahead of the curve when it comes to visual design. Most
                  companies try to stay ahead of the curve when it comes to
                  visual design. Most companies try to stay ahead of the curve
                  when it comes to visual design.
                </p>
                <p>
                  Most companies try to stay ahead of the curve when it comes to
                  visual design. Most companies try to stay ahead of the curve
                  when it comes to visual design. Most companies try to stay
                  ahead of the curve when it comes to visual design. Most
                  companies try to stay ahead of the curve when it comes to
                  visual design. Most companies try to stay ahead of the curve
                  when it comes to visual design.
                </p>
                <p>
                  Most companies try to stay ahead of the curve when it comes to
                  visual design. Most companies try to stay ahead of the curve
                  when it comes to visual design. Most companies try to stay
                  ahead of the curve when it comes to visual design. Most
                  companies try to stay ahead of the curve when it comes to
                  visual design. Most companies try to stay ahead of the curve
                  when it comes to visual design.
                </p>
              </div>
            </div>
          </div>
        </main>
      </main>
    </>
  );
}

<script src="../path/to/flowbite/dist/flowbite.js"></script>;
