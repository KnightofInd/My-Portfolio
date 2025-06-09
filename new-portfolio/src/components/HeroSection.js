'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const backgroundRef = useRef(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.scrollY;
        backgroundRef.current.style.transform = `scale(${1 + scrolled * 0.0004})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/cityscape.jpg" // Add your cityscape image
          alt="Futuristic Cityscape"
          fill
          className="object-cover"
          priority
        />
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        <div className="particles-container">
          {/* Add particle effects here */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-50 animate-pulse" />
              <Image
                src="/profile.jpg" // Add your profile image
                alt="Profile"
                width={256}
                height={256}
                className="relative rounded-full object-cover border-2 border-blue-500"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6
                         [text-shadow:_0_0_30px_rgb(0_0_128_/_0.5)]">
              From Neural Nets to Engine Sets —
              <br />
              I Engineer Intelligence
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 font-space-grotesk mb-8">
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  2000,
                  'Auto Geek',
                  2000,
                  'AI Engineer',
                  2000
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
              />
              <p className="mt-4 opacity-80">
                Bridging the gap between AI innovation and automotive excellence
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="px-8 py-3 rounded-full border-2 border-blue-500 text-white
                         bg-transparent hover:bg-blue-500/20 transition-all duration-300
                         [box-shadow:_0_0_20px_rgb(0_0_255_/_0.3)]
                         hover:[box-shadow:_0_0_30px_rgb(0_0_255_/_0.5)]"
              >
                View Projects
              </Link>
              <Link
                href="/resume.pdf"
                className="px-8 py-3 rounded-full border-2 border-blue-300 text-white
                         bg-transparent hover:bg-blue-300/20 transition-all duration-300
                         [box-shadow:_0_0_20px_rgb(0_0_255_/_0.2)]
                         hover:[box-shadow:_0_0_30px_rgb(0_0_255_/_0.4)]"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
