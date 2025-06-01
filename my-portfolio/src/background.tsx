import Image from 'next/image';
import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full background-wrapper">
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        priority
        className="object-cover w-full h-full"
        quality={100}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        syne: ['var(--font-syne)'],
      },
      colors: {
        'custom-navy': '#000080',
      },
    },
  },
  plugins: [],
}