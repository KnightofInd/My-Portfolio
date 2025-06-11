'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Profile Section */}
          <div className="flex items-center space-x-4">
            {/* Profile Photo - Visible on all screens */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#877067]/30">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <Link href="/" className="text-xl font-bold text-white">
              rohans<span className="text-[#877067]">.tech</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-[#877067] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-300 hover:text-[#877067] transition-colors duration-200"
            >
              Projects
            </Link>
            <Link 
              href="/skills" 
              className="text-gray-300 hover:text-[#877067] transition-colors duration-200"
            >
              Skills
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-[#877067] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center group"
          >
            <div className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ease-out
                          ${isOpen ? 'rotate-45 translate-y-1.5 bg-[#877067]' : ''}`} />
            <div className={`w-6 h-0.5 bg-gray-300 mt-1.5 transition-all duration-300 ease-out
                          ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-gray-300 mt-1.5 transition-all duration-300 ease-out
                          ${isOpen ? '-rotate-45 -translate-y-1.5 bg-[#877067]' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out transform origin-top
                      ${isOpen ? 'opacity-100 scale-y-100 bg-black/95 backdrop-blur-md' : 'opacity-0 scale-y-0 h-0'}`}>
          <div className="py-4 space-y-4">
            {/* Mobile Profile Info */}
            <div className="flex items-center space-x-4 px-4 py-2 border-b border-[#877067]/20">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#877067]/30">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-white font-medium">Rohan</h3>
                <p className="text-sm text-gray-400">Data Scientist</p>
              </div>
            </div>
            
            <Link 
              href="/" 
              className="block text-gray-300 hover:text-[#877067] transition-all duration-200
                       hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="block text-gray-300 hover:text-[#877067] transition-all duration-200
                       hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/skills" 
              className="block text-gray-300 hover:text-[#877067] transition-all duration-200
                       hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link 
              href="/contact" 
              className="block text-gray-300 hover:text-[#877067] transition-all duration-200
                       hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
