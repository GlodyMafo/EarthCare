


import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          EarthCare
        </Link>
        <button
          onClick={toggleMenu}
          className="lg:hidden block text-xl"
          aria-label="Toggle menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}
        >
          <li>
            <Link
              to="/"
              className="block px-4 py-2 hover:text-[#FCDC2A] focus:font-semibold focus:text-[#FCDC2A] hover:font-semibold"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block px-4 py-2 hover:text-[#FCDC2A] focus:text-[#FCDC2A] hover:font-semibold focus:font-semibold"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className="block px-4 py-2 hover:text-[#FCDC2A] focus:text-[#FCDC2A] hover:font-semibold focus:font-semibold"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="/forum"
              className="block px-4 py-2 hover:text-[#FCDC2A] focus:text-[#FCDC2A] hover:font-semibold focus:font-semibold"
            >
              Forum
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="block px-4 py-2 hover:text-[#FCDC2A] focus:text-[#FCDC2A] hover:font-semibold transition focus:font-semibold"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

