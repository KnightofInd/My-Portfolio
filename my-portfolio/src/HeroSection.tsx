"use client";

import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black/80 via-gray-900/60 to-black/80">
      {/* Background with enhanced parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="relative w-full h-full"
        >
          <Image
            src="/cityscape.jpg"
            alt="Futuristic Cityscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </motion.div>
      </div>

      {/* Content Container with Glass Effect */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <div className="relative w-56 h-56 mx-auto group">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover border-2 border-[#877067] shadow-[0_0_15px_#877067] 
                         transition-all duration-500 group-hover:border-4 group-hover:shadow-[0_0_25px_#877067]"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#877067] to-[#877067]/50 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-2/3 space-y-8 text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-syne text-white leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-[#877067] to-white text-transparent bg-clip-text">
                Hi, I Am
              </span>
              <br />
              <span className="text-glow">Rohan Sharma</span>
            </h1>
            
            <div className="text-4xl md:text-5xl font-bold text-gray-300 font-space-grotesk">
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  2000,
                  'Auto Geek',
                  2000,
                  'Full Stack Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-[#877067] to-white text-transparent bg-clip-text font-bold"
              />
            </div>

            <p className="text-gray-400 text-xl max-w-2xl pr-4 leading-relaxed font-light">
              Bridging the gap between AI and automotive engineering. 
              Hackathon enthusiast turning complex problems into elegant solutions.
            </p>

            <motion.div 
              className="flex items-start gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="group relative px-8 py-4 border-2 border-[#877067] text-white rounded-lg overflow-hidden">
                <span className="relative z-10 font-medium tracking-wider">View Projects</span>
                <div className="absolute inset-0 bg-[#877067] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </button>
              <button className="group relative px-8 py-4 border-2 border-[#877067] text-white rounded-lg overflow-hidden">
                <span className="relative z-10 font-medium tracking-wider">Download Resume</span>
                <div className="absolute inset-0 bg-[#877067] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}