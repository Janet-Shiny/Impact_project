"use client"
import React from 'react';
import Image from 'next/image';

import { useState, useEffect } from 'react';

function Homepage() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-blue-500">
      <div className="container mx-auto py-8 md:py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 md:mb-8">
          Spotlight
        </h2>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <button
              className={`px-4 py-2 rounded-md text-white font-medium bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 ${
                isScrolling ? 'fixed top-10 right-10' : ''
              }`}
            >
              Magazine
            </button>
            <button
              className={`px-4 py-2 rounded-md text-white font-medium bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 ${
                isScrolling ? 'fixed top-10 right-10' : ''
              }`}
            >
              Podcast
            </button>
            <button
              className={`px-4 py-2 rounded-md text-white font-medium bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 ${
                isScrolling ? 'fixed top-10 right-10' : ''
              }`}
            >
              Events
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:mt-12">
          <div className="col-span-1">
            <Image
              src="/images/spotlight-1.jpg"
              alt="Spotlight Image 1"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/images/spotlight-2.jpg"
              alt="Spotlight Image 2"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/images/spotlight-3.jpg"
              alt="Spotlight Image 3"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
