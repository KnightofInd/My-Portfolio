'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const gallery = galleryRef.current;
      
      if (gallery && section) {
        const sectionRect = section.getBoundingClientRect();
        const visibilityThreshold = 40;
        const scrollY = window.scrollY;
        
        // Calculate scroll progress
        const containerTop = sectionRect.top;
        const scrollHeight = section.scrollHeight - window.innerHeight;
        
        // Calculate different scroll states
        const isEntering = containerTop <= visibilityThreshold && containerTop > -window.innerHeight;
        const isFullyInView = containerTop <= -200 && sectionRect.bottom >= visibilityThreshold;
        
        let scrollProgress = 0;
        
        if (isEntering) {
          scrollProgress = Math.min(0.99, (visibilityThreshold - containerTop) / window.innerHeight);
        } else if (isFullyInView) {
          const galleryScrollHeight = scrollHeight - window.innerHeight;
          const scrolledAmount = Math.min(
            scrollY - (section.offsetTop + visibilityThreshold - window.innerHeight),
            galleryScrollHeight
          );
          scrollProgress = Math.min(0.99, scrolledAmount / galleryScrollHeight);
        }
        
        // Apply smooth scrolling
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        const targetScroll = maxScroll * scrollProgress;
        
        gallery.style.transform = `translateX(-${targetScroll}px)`;
        
        // Update current image index
        const newIndex = Math.min(
          photos.length - 1,
          Math.floor(scrollProgress * photos.length)
        );
        
        if (newIndex !== currentImageIndex) {
          setCurrentImageIndex(newIndex);
        }

        // Handle scroll animation state
        if (!isScrolling) {
          setIsScrolling(true);
        }
        
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, [currentImageIndex]);

  const photos = [
    {
      id: 1,
      src: '/gallery/photo1.jpg',
      title: 'AI Project',
      description: 'Deep learning model visualization'
    },
    {
      id: 2,
      src: '/gallery/photo2.jpg',
      title: 'Data Analysis',
      description: 'Automotive data insights'
    },
    {
      id: 3,
      src: '/gallery/photo3.jpg',
      title: 'Machine Learning',
      description: 'Pattern recognition system'
    },
    {
      id: 4,
      src: '/gallery/photo4.jpg',
      title: 'Research Work',
      description: 'Experimental results'
    },
    {
      id: 5,
      src: '/gallery/photo5.jpg',
      title: 'Automation',
      description: 'Process automation dashboard'
    },
    {
      id: 6,
      src: '/gallery/photo6.jpg',
      title: 'Innovation',
      description: 'Next-gen technology demo'
    },
    {
      id: 7,
      src: '/gallery/photo7.jpg',
      title: 'AI Analytics',
      description: 'Predictive modeling systems'
    },
    {
      id: 8,
      src: '/gallery/photo8.jpg',
      title: 'Data Science',
      description: 'Statistical analysis workflow'
    },
    {
      id: 9,
      src: '/gallery/photo9.jpg',
      title: 'Automation',
      description: 'Robotic process automation'
    },
    {
      id: 10,
      src: '/gallery/photo10.jpg',
      title: 'Research',
      description: 'Advanced analytics dashboard'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-black relative min-h-[200vh] overflow-hidden"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-white font-orbitron mb-16
                      [text-shadow:_0_0_30px_rgba(135,112,103,0.3)]">
            Gallery
          </h2>

          <div 
            ref={galleryRef}
            className="scroll-container flex gap-8 px-4 transition-transform duration-300 ease-out"
          >
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className={`flex-none w-[500px] transition-all duration-500
                          ${currentImageIndex === index ? 'scale-105 z-10' : 'scale-95'}`}
                style={{ opacity: Math.max(0.4, 1 - Math.abs(currentImageIndex - index) * 0.25) }}
              >
                <div className="relative h-[600px] rounded-xl overflow-hidden
                              group transform transition-all duration-300 hover:scale-105
                              shadow-[0_0_30px_rgba(135,112,103,0.2)]">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent
                                opacity-60 group-hover:opacity-80 transition-opacity duration-300"/>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2
                                group-hover:translate-y-0 transition-transform duration-300
                                bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-3 
                                font-orbitron group-hover:text-[#877067]">
                      {photo.title}
                    </h3>
                    <p className="text-gray-300 text-base opacity-0 group-hover:opacity-100
                               transition-opacity duration-300">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll instruction */}
          <div className="absolute bottom-8 w-full flex justify-center">
            <div className={`bg-[#877067]/10 backdrop-blur-md text-white px-6 py-3 rounded-full 
                         shadow-lg transform transition-all duration-500 
                         ${isScrolling ? 'opacity-0 translate-y-10' : 'opacity-100'}`}>
              <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#877067] animate-bounce" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Scroll to explore gallery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
