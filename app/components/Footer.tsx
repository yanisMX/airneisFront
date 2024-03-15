"use client";
import Link from 'next/link';

const links = [
    { href: "/cgu", label: 'CGU' },
    { href: "/mentionslegales", label: 'Mentions Légales' },
    { href: "/contacts", label: 'Contacts' },

  ];


const Footer = () => {

    const icons = [
        '/instagram.png'
      ];



    return (
        <footer className="bg-gray-900 text-white w-full">
        <div className="px-5 xl:px-12 py-6 flex justify-between items-center">
            <a className="text-3xl font-bold font-heading" href="/">
            AIRNEIS
            </a>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                <a href={href}>{label}</a>
                </li>
            ))}
            <li>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={icons[0]} className="h-6 filter brightness-0 invert" alt="Instagram" />
                </a>
            </li>
            </ul>
        </div>
        </footer>
    );
    }

export default Footer;