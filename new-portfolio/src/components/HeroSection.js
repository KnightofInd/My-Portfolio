'use client';

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-4rem)] overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cityscape.jpg"
          alt="Futuristic Cityscape"
          fill
          className="object-cover opacity-80" // Increased opacity for more visibility
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" /> {/* Reduced overlay opacity */}
      </div>

      {/* Content Layout */}
      <div className="relative z-20 flex items-center h-full">
        {/* Profile Section */}
        <div className="hidden lg:block relative w-1/2 h-full">
          <div className="flex items-center justify-center h-full">
            <div className="relative w-[600px] h-[600px] rounded-3xl overflow-hidden
                          shadow-[0_0_40px_rgba(135,112,103,0.3)]
                          before:absolute before:inset-0 
                          before:bg-gradient-to-r before:from-transparent before:to-[#877067]/95
                          after:absolute after:inset-0 
                          after:bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8))]">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Section with Updated Glassmorphism */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mx-auto lg:mr-0 p-6 rounded-xl backdrop-blur-md bg-black/20"> {/* Added container with increased transparency */}
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6
                       [text-shadow:_0_0_30px_rgba(135,112,103,0.3)]"> {/* Reduced glow intensity */}
              Hi I am Rohan
            
            </h1>
            
            <div className="text-xl md:text-2xl text-[#e2d5d1] font-space-grotesk mb-8">
              <span className="typing-text border-[#877067]/70"> {/* Reduced border opacity */}
                Data Scientist
              </span>
              <p className="mt-4 opacity-95"> {/* Increased text opacity */}
                Bridging the gap between AI innovation and automotive excellence
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/projects" 
                className="px-8 py-3 rounded-full border-2 border-[#877067]/70 text-white
                       bg-gradient-to-r from-[#877067]/5 to-transparent
                       hover:from-[#877067]/20 hover:to-[#877067]/5
                       transition-all duration-300
                       shadow-[0_0_20px_rgba(135,112,103,0.2)]
                       hover:shadow-[0_0_30px_rgba(135,112,103,0.4)]
                       backdrop-blur-sm"
              >
                View Projects
              </Link>
              <Link 
                href="/resume.pdf" 
                className="px-8 py-3 rounded-full border-2 border-[#877067]/60 text-white
                       bg-gradient-to-r from-[#877067]/5 to-transparent
                       hover:from-[#877067]/15 hover:to-[#877067]/5
                       transition-all duration-300
                       shadow-[0_0_20px_rgba(135,112,103,0.15)]
                       hover:shadow-[0_0_30px_rgba(135,112,103,0.3)]
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
