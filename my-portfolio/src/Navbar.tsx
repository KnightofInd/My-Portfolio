"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-white text-2xl font-bold font-syne">
              ROHAN
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-gray-300 transition-all duration-300 text-lg font-medium hover:text-[#877067] group nav-glow"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#877067] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:shadow-[0_0_10px_#877067,0_0_20px_#877067]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 nav-glow hover:text-[#877067] hover:bg-[#877067]/10 focus:outline-none transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-4 sm:px-3 bg-black/60 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block w-full px-3 py-2 text-gray-300 text-center text-xl font-medium transition-colors duration-300 hover:text-[#877067] nav-glow"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}