"use client"
import React from 'react';
import { useState } from 'react';

const Slider = () => {
  // Supposons que vous avez un tableau d'images dans votre composant ou importé d'ailleurs
  const images = [
    '/Cappuccino2.jpg',
    '/Espresso.png',
    '/Latte.jpg'
  ];

  const [index, setIndex] = useState(0); // Commence par la première image

  // Gérer le clic sur "Next"
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length); // Avance et boucle au début
  };

  // Gérer le clic sur "Prev"
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Recule et boucle à la fin
  };

  return (
    <div id="controls-carousel" className="relative mx-auto max-w-screen-lg pt-8 overflow-hidden rounded-lg" data-carousel="static">
  <div className="relative h-56 md:h-96">
    {images.map((img, imgIndex) => (
      <div key={imgIndex} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === imgIndex ? 'opacity-100' : 'opacity-0'}`} data-carousel-item>
        <img src={img} className="w-full h-full object-cover" alt={`Slide ${imgIndex}`} />
      </div>
    ))}
  </div>
    <button onClick={handlePrev} type="button" className="absolute top-1/2 left-0 z-30 transform -translate-y-1/2 px-4 cursor-pointer focus:outline-none" data-carousel-prev>      
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <svg className="w-6 h-6 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
    <button onClick={handleNext} type="button" className="absolute top-1/2 right-0 z-30 transform -translate-y-1/2 px-4 cursor-pointer focus:outline-none" data-carousel-next>     
     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <svg className="w-6 h-6 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5l7 7-7 7"></path>
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  </div>
  
  );
};

export default Slider;
