'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const texts = [
    'Data Scientist',
    'AI/ML Engineer',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout;

    const updateText = () => {
      // Paused state - wait before starting deletion
      if (isPaused) {
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, 200);
        return;
      }

      if (isTyping) {
        // Typing forward
        if (displayText === currentText) {
          setIsPaused(true);
          return;
        }
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        // Deleting
        if (displayText === '') {
          setIsTyping(true);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          return;
        }
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }

      // Set next timeout with different speeds for typing and deleting
      timeout = setTimeout(updateText, isTyping ? 150 : 75);
    };

    timeout = setTimeout(updateText, isTyping ? 150 : 75);

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentIndex, isPaused]);

  return (
    <section className="relative h-[calc(100vh-4rem)] overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cityscape.jpg"
          alt="Futuristic Cityscape"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Content Layout */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center h-full px-4">
        {/* Profile Section - Responsive */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex items-center justify-center">
            {/* Mobile Profile Photo */}
            <div className="lg:hidden relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden
                          shadow-[0_0_40px_rgba(135,112,103,0.3)]
                          before:absolute before:inset-0 
                          before:bg-gradient-to-r before:from-transparent before:to-[#877067]/95
                          after:absolute after:inset-0 
                          after:bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8))]">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Desktop Profile Photo */}
            <div className="hidden lg:block relative w-[600px] h-[600px] rounded-3xl overflow-hidden
                          shadow-[0_0_40px_rgba(135,112,103,0.3)]
                          before:absolute before:inset-0 
                          before:bg-gradient-to-r before:from-transparent before:to-[#877067]/95
                          after:absolute after:inset-0 
                          after:bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8))]">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:mr-0 p-6 rounded-xl backdrop-blur-md bg-black/20">
            <h1 className="font-orbitron text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6
                       [text-shadow:_0_0_30px_rgba(135,112,103,0.3)]">
              Hi I am Rohan
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-4xl text-[#e2d5d1] font-space-grotesk mb-6 lg:mb-8">
              <div className="inline-flex items-center">
                <span className="inline-block min-w-[2ch] transition-all duration-75 
                         font-bold bg-gradient-to-r from-white to-[#e2d5d1] 
                         bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span 
                  className={`w-0.5 h-[1.2em] bg-[#877067] ml-1 ${
                    isPaused ? 'animate-blink' : 'opacity-100'
                  }`}
                ></span>
              </div>
              <p className="mt-3 lg:mt-4 opacity-95 text-base md:text-lg lg:text-xl font-normal">
                Think. Create. Evolve. Crafting solutions with purpose.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
              <Link 
                href="/projects" 
                className="px-6 sm:px-8 py-3 rounded-full border-2 border-[#877067]/70 text-white
                       bg-gradient-to-r from-[#877067]/5 to-transparent
                       hover:from-[#877067]/20 hover:to-[#877067]/5
                       transition-all duration-300
                       shadow-[0_0_20px_rgba(135,112,103,0.2)]
                       hover:shadow-[0_0_30px_rgba(135,112,103,0.4)]
                       backdrop-blur-sm text-sm sm:text-base"
              >
                View Projects
              </Link>
              <Link 
                href="/resume.pdf" 
                className="px-6 sm:px-8 py-3 rounded-full border-2 border-[#877067]/60 text-white
                       bg-gradient-to-r from-[#877067]/5 to-transparent
                       hover:from-[#877067]/15 hover:to-[#877067]/5
                       transition-all duration-300
                       shadow-[0_0_20px_rgba(135,112,103,0.15)]
                       hover:shadow-[0_0_30px_rgba(135,112,103,0.3)]
                       backdrop-blur-sm text-sm sm:text-base"
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
