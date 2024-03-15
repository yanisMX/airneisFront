"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: "/", label: 'LOGO AIRNEIS' },
  { href: "/categories", label: "catégories" },
  { href: "/panier", label: "panier" },
  { href: "/moncompte", label: "moncompte" },
  { href: "/creeruncompte", label: "créeruncompte" },
  { href: "/seconnecter", label: "seconnecter" },
  { href: "/rechercher", label:"rechercher"}
  
];



const Nav = () => {

  const icons = [
    '/shopping-cart.512x511.png',
    '/search.png',
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white w-full">
      <div className="px-5 xl:px-12 py-6 flex justify-end items-center">
        <a className="text-3xl font-bold font-heading" href="/">
          AIRNEIS
        </a>
        <ul className="hidden md:flex px-4 ml-auto font-semibold font-heading space-x-5">
            {/* Je dois mettre un panier, un compte client et autre*/}
            <li> 
            <Link href="/panier">
               <img src={icons[0]} className="h-6 filter brightness-0 invert" alt="Panier" />
            </Link>
            </li>
            <li> 
            <Link href="/rechercher">
                <img src={icons[1]} className="h-6 filter brightness-0 invert" alt="Rechercher" />
            </Link>
            </li>
        </ul>
            <button onClick={handleClick} 
            className="flex flex-col justify-center items-center">
            <span className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
            </span>
            <span className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0,5 ${isOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
            </span>
            <span className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
            </span>

            </button>
  
        {/* Bouton de menu pour les écrans plus petits */}
        <button onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      
      {/* Contenu du menu pour mobile, basé sur isOpen */}
      {isOpen && (
        <div className="flex justify-end" >
          <ul>
            <li><a className="hover:text-gray-400" href="/">Accueil</a></li>
            <li><a className="hover:text-gray-400" href="/categories">Categories</a></li>
            <li><a className="hover:text-gray-400" href="/collections">Collections</a></li>
            <li><a className="hover:text-gray-400" href="/contacts">Contact</a></li>
          </ul>
        </div>

      )}
      </nav>
  );
};

export default Nav;
