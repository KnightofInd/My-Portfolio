"use client";

import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Define animation duration constant to keep timing consistent
  const ANIMATION_DURATION = 2000;

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: ANIMATION_DURATION, // Match TypeAnimation duration
    fade: true,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'linear'
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black/80 via-gray-900/60 to-black/80">
      {/* Background with enhanced parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="relative w-full h-full"
        >
          <Image
            src="/cityscapes.jpg"
            alt="Futuristic Cityscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </motion.div>
      </div>

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
            <Slider {...settings} className="h-full">
              {['/profile.jpg', '/profile2.jpg', '/profile3.jpg'].map((src, index) => (
                <div key={index} className="relative h-[400px] sm:h-[500px] lg:h-[750px]">
                  <Image
                    src={src}
                    alt={`Profile ${index + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    priority={index === 0}
                  />
                  {/* Gradient overlays */}
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
            
            <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-300 font-space-grotesk">
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  ANIMATION_DURATION, // Use the same duration constant
                  'Auto Geek',
                  ANIMATION_DURATION,
                  'Full Stack Developer',
                  ANIMATION_DURATION,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-[#877067] to-white text-transparent bg-clip-text font-bold"
              />
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