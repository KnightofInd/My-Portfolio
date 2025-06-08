"use client";

import { useEffect, useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';

const roles = [
  'Data Scientist',
  'Auto Geek',
  'Full Stack Developer',
];
const images = [
  '/profile.jpg',
  '/profile2.jpg',
  '/profile3.jpg',
];
const ANIMATION_DURATION = 2000;

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  // Advance both image and text together
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % roles.length;
        sliderRef.current?.slickGoTo(nextIndex);
        return nextIndex;
      });
    }, ANIMATION_DURATION);
    return () => clearInterval(interval);
  }, []);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'linear',
    initialSlide: 0,
  };

  return (
    <div className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black/80 via-gray-900/60 to-black/80">
      {/* Background with enhanced parallax effect */}
      <div className="absolute inset-0 z-0"></div>

      {/* Content Container with Glass Effect */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 overflow-hidden">
          {/* Profile Images Carousel Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[750px] relative"
          >
            <Slider ref={sliderRef} {...settings}>
              {images.map((src, index) => (
                <div key={index} className="relative h-[400px] sm:h-[500px] lg:h-[750px]">
                  <Image
                    src={src}
                    alt={`Profile ${index + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Text Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-16 space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-syne text-white leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-[#877067] to-white text-transparent bg-clip-text">
                Hi, I Am
              </span>
              <br />
              <span className="text-glow">Rohan Sharma</span>
            </h1>
            
            <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-300 font-space-grotesk min-h-[2.5em]">
              <TypeAnimation
                key={currentIndex} // force re-render for each role
                sequence={[
                  roles[currentIndex],
                  ANIMATION_DURATION - 200, // leave a little time for fade
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
                className="bg-gradient-to-r from-[#877067] to-white text-transparent bg-clip-text font-bold"
              />
              <span className="animate-pulse text-[#877067] ml-1 align-middle">|</span>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#877067] text-white rounded-lg">
                <span className="relative z-10 font-medium tracking-wider whitespace-nowrap">View Projects</span>
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#877067] text-white rounded-lg">
                <span className="relative z-10 font-medium tracking-wider whitespace-nowrap">Download Resume</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}