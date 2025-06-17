'use client';

import React, { useEffect, useRef } from 'react';

const AboutMe = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Background with subtle animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_800px_at_50%_-100%,#b39c94,transparent)] animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8"> {/* Reduced from space-y-12 */}
          {/* Enhanced Title */}
          <h2 className="reveal-on-scroll text-5xl lg:text-6xl font-bold text-white font-orbitron
                      [text-shadow:_0_0_30px_rgba(179,156,148,0.4)]">
            About Me
          </h2>
          
          {/* Enhanced Introduction with reduced spacing and larger, brighter text */}
          <div className="space-y-4 text-gray-100 font-space-grotesk"> {/* Reduced from space-y-8 and brightened text */}
            <p className="reveal-on-scroll delay-200 p-6 rounded-xl backdrop-blur-sm
                       text-xl leading-relaxed {/* Increased from text-lg */}
                       bg-gradient-to-r from-[#b39c94]/5 to-transparent
                       hover:from-[#b39c94]/10 hover:to-[#b39c94]/5
                       transition-all duration-500 hover:-translate-y-1">
              Hey there! I&apos;m <span className="text-[#b39c94] font-semibold 
                                           relative inline-block
                                           after:absolute after:w-full after:h-0.5
                                           after:bg-[#b39c94] after:bottom-0 after:left-0
                                           after:origin-left after:scale-x-0
                                           group-hover:after:scale-x-100
                                           after:transition-transform after:duration-300">
                Rohan</span>, 
              a Creative Problem Solver with a flair for blending tech with real-world impact. 
              From <span className="text-white/90 hover:text-[#b39c94] transition-colors duration-300">
                full-stack web apps</span> to <span className="text-white/90 hover:text-[#b39c94] transition-colors duration-300">
                AI-driven solutions</span>, I thrive on solving meaningful problems — 
              and <span className="italic bg-gradient-to-r from-[#b39c94] to-white bg-clip-text text-transparent
                                hover:from-white hover:to-[#b39c94] transition-all duration-500">
                hackathons are my playground</span>.
            </p>

            <p className="reveal-on-scroll delay-400 p-6 rounded-xl backdrop-blur-sm
                       text-xl leading-relaxed {/* Increased from text-lg */}
                       bg-gradient-to-l from-[#b39c94]/5 to-transparent
                       hover:from-[#b39c94]/10 hover:to-[#b39c94]/5
                       transition-all duration-500 hover:-translate-y-1">
              <span className="inline-block animate-bounce-slow">💡</span> Whether it&apos;s optimizing 
              <span className="relative inline-block group mx-2">
                disaster response
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#b39c94]
                             origin-left scale-x-0 group-hover:scale-x-100
                             transition-transform duration-300"></span>
              </span>, 
              predicting pandemics, or decoding social media trends, I love turning complex ideas into 
              intuitive, scalable systems.
            </p>

            <p className="reveal-on-scroll delay-400 p-6 rounded-xl backdrop-blur-md
                       text-xl leading-relaxed {/* Increased from text-lg */}
                       bg-gradient-to-br from-[#b39c94]/10 via-[#b39c94]/5 to-transparent
                       hover:from-[#b39c94]/15 hover:via-[#b39c94]/10 hover:to-transparent
                       transition-all duration-500 hover:-translate-y-1
                       border border-[#b39c94]/20 hover:border-[#b39c94]/30
                       shadow-[0_0_30px_rgba(179,156,148,0.1)]
                       hover:shadow-[0_0_50px_rgba(179,156,148,0.2)]">
              <span className="inline-block animate-pulse">🎯</span> &quot;Beyond the screen, I channel my passion into 
              leading tech clubs and organizing campus hackathons — turning curiosity into community, 
              and ideas into impact.&quot;
            </p>
          </div>

          {/* Stats Grid with reduced top margin */}
          <div className="reveal-on-scroll delay-600 grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="group p-6 rounded-xl backdrop-blur-sm bg-[#877067]/10
                          transition-all duration-500 hover:bg-[#877067]/20
                          hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2 
                          transition-transform duration-500 group-hover:scale-110">5+</div>
              <div className="text-sm text-gray-400 group-hover:text-white">Hackathon Wins</div>
            </div>
            
            <div className="group p-6 rounded-xl backdrop-blur-sm bg-[#877067]/10
                          transition-all duration-500 hover:bg-[#877067]/20
                          hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2 
                          transition-transform duration-500 group-hover:scale-110">15+</div>
              <div className="text-sm text-gray-400 group-hover:text-white">Projects Completed</div>
            </div>
            
            <div className="group p-6 rounded-xl backdrop-blur-sm bg-[#877067]/10
                          transition-all duration-500 hover:bg-[#877067]/20
                          hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2 
                          transition-transform duration-500 group-hover:scale-110">20+</div>
              <div className="text-sm text-gray-400 group-hover:text-white">Technologies</div>
            </div>
            
           {/*  <div className="group p-6 rounded-xl backdrop-blur-sm bg-[#877067]/10
                          transition-all duration-500 hover:bg-[#877067]/20
                          hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2 
                          transition-transform duration-500 group-hover:scale-110">15+</div>
              <div className="text-sm text-gray-400 group-hover:text-white">Technologies</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;