'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const gallery = galleryRef.current;

    if (!section || !container || !gallery) return;

    const totalScrollDistance = gallery.scrollWidth - window.innerWidth;
    const sectionHeight = window.innerHeight * 2; // Adjust multiplier to control scroll length
    section.style.height = `${sectionHeight}px`;

    const handleScroll = () => {
      const sectionRect = section.getBoundingClientRect();
      
      // Only animate when section is in view
      if (sectionRect.top <= 0 && sectionRect.bottom >= window.innerHeight) {
        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.min(
          Math.max(
            -sectionRect.top / (sectionRect.height - window.innerHeight),
            0
          ),
          1
        );

        // Apply smooth transform
        const translateX = totalScrollDistance * scrollProgress;
        gallery.style.transform = `translateX(-${translateX}px)`;

        // Pin the container
        container.style.position = 'fixed';
        container.style.top = '0';
      } else if (sectionRect.top > 0) {
        // Reset position when scrolling back up
        container.style.position = 'relative';
        gallery.style.transform = 'translateX(0)';
      } else {
        // Unpin after scrolling past
        container.style.position = 'relative';
        container.style.top = `${sectionRect.height - window.innerHeight}px`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const photos = [
    {
      id: 1,
      src: '/gallery/photo1.jpg'
    },
    {
      id: 2,
      src: '/gallery/photo2.jpg'
    },
    {
      id: 3,
      src: '/gallery/photo3.jpg'
    },
    {
      id: 4,
      src: '/gallery/photo4.jpg'
    },
    {
      id: 5,
      src: '/gallery/photo5.jpg'
    },
    {
      id: 6,
      src: '/gallery/photo6.jpg'
    },
    {
      id: 7,
      src: '/gallery/photo7.jpg'
    },
    {
      id: 8,
      src: '/gallery/photo8.jpg'
    },
    {
      id: 9,
      src: '/gallery/photo9.jpg'
    },
    {
      id: 10,
      src: '/gallery/photo10.jpg'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black"
    >
      <div 
        ref={containerRef}
        className="w-full h-screen overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        
        <div className="relative z-10 h-full flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-white font-orbitron mb-16
                      [text-shadow:_0_0_30px_rgba(135,112,103,0.3)]">
            Gallery
          </h2>

          <div 
            ref={galleryRef}
            className="flex gap-8 px-4 transition-transform duration-300 ease-out will-change-transform"
          >
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className="flex-none w-[500px] transition-all duration-500"
              >
                <div className="relative h-[600px] rounded-xl overflow-hidden
                            group transform transition-all duration-300 hover:scale-105
                            shadow-[0_0_30px_rgba(135,112,103,0.2)]">
                  <Image
                    src={photo.src}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent
                              opacity-60 group-hover:opacity-80 transition-opacity duration-300"/>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 w-full flex justify-center">
            <div className="bg-[#877067]/10 backdrop-blur-md text-white px-6 py-3 rounded-full 
                        shadow-lg animate-bounce">
              <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#877067]" 
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
