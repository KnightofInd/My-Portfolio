'use client';

import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Title with simple fade */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-orbitron
                      [text-shadow:_0_0_30px_rgba(135,112,103,0.3)]
                      transition-all duration-700 hover:scale-105">
            About Me
          </h2>
          
          {/* Text Content with hover effects */}
          <div className="space-y-6 text-gray-300 font-space-grotesk">
            <p className="text-lg transition-all duration-300 hover:-translate-y-1 hover:text-white">
              I&#39;m a passionate Data Scientist and Automotive enthusiast with a unique blend of AI expertise and engineering intuition.
            </p>
            <p className="text-lg transition-all duration-300 hover:-translate-y-1 hover:text-white">
              With a background in both data science and automotive engineering, I bridge the gap between cutting-edge AI technologies and practical automotive applications.
            </p>
            <p className="text-lg transition-all duration-300 hover:-translate-y-1 hover:text-white">
              My journey involves transforming complex data into actionable insights, developing innovative solutions, and pushing the boundaries of what's possible in automotive intelligence.
            </p>
          </div>

          {/* Stats Grid with hover animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group p-6 rounded-xl backdrop-blur-sm bg-[#877067]/10
                          transition-all duration-500 hover:bg-[#877067]/20
                          hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2 
                          transition-transform duration-500 group-hover:scale-110">5+</div>
              <div className="text-sm text-gray-400 group-hover:text-white">Years Experience</div>
            </div>
            
            <div className="group p-6 rounded-xl backdrop-blur-sm bg-[#877067]/10
                          transition-all duration-500 hover:bg-[#877067]/20
                          hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2 
                          transition-transform duration-500 group-hover:scale-110">50+</div>
              <div className="text-sm text-gray-400 group-hover:text-white">Projects Completed</div>
            </div>
            
            <div className="group p-6 rounded-xl backdrop-blur-sm bg-[#877067]/10
                          transition-all duration-500 hover:bg-[#877067]/20
                          hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2 
                          transition-transform duration-500 group-hover:scale-110">30+</div>
              <div className="text-sm text-gray-400 group-hover:text-white">Happy Clients</div>
            </div>
            
            <div className="group p-6 rounded-xl backdrop-blur-sm bg-[#877067]/10
                          transition-all duration-500 hover:bg-[#877067]/20
                          hover:-translate-y-2">
              <div className="text-4xl font-bold text-white mb-2 
                          transition-transform duration-500 group-hover:scale-110">15+</div>
              <div className="text-sm text-gray-400 group-hover:text-white">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
