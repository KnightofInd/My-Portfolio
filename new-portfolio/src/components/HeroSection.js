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
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        <Image
          src="/cityscape.jpg"
          alt="Futuristic Cityscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm" />
      </div>

      {/* Content with new layout */}
      <div className="relative z-20 flex items-center min-h-screen">
        {/* Profile Section - Now relative instead of fixed */}
        <div className="hidden lg:block relative w-1/2 h-screen">
          <div className="sticky top-0 h-screen w-full">
            <div className="relative w-full h-full">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlays for better blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#877067]/40 via-transparent to-[#877067]/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#877067] opacity-90" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 bg-gradient-to-l from-transparent via-[#877067]/10 to-[#877067]/20">
          <div className="max-w-2xl mx-auto lg:mr-0">
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6
                         [text-shadow:_0_0_30px_rgba(135,112,103,0.5)]">
              From Neural Nets to Engine Sets —
              <br />
              I Engineer Intelligence
            </h1>
            
            <div className="text-xl md:text-2xl text-[#e2d5d1] font-space-grotesk mb-8">
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
              <p className="mt-4 opacity-90">
                Bridging the gap between AI innovation and automotive excellence
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/projects"
                className="px-8 py-3 rounded-full border-2 border-[#877067] text-white
                         bg-gradient-to-r from-[#877067]/10 to-transparent
                         hover:from-[#877067]/30 hover:to-[#877067]/10
                         transition-all duration-300
                         [box-shadow:_0_0_20px_rgba(135,112,103,0.3)]
                         hover:[box-shadow:_0_0_30px_rgba(135,112,103,0.5)]
                         backdrop-blur-sm"
              >
                View Projects
              </Link>
              <Link
                href="/resume.pdf"
                className="px-8 py-3 rounded-full border-2 border-[#877067]/80 text-white
                         bg-gradient-to-r from-[#877067]/5 to-transparent
                         hover:from-[#877067]/20 hover:to-[#877067]/5
                         transition-all duration-300
                         [box-shadow:_0_0_20px_rgba(135,112,103,0.2)]
                         hover:[box-shadow:_0_0_30px_rgba(135,112,103,0.4)]
                         backdrop-blur-sm"
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
