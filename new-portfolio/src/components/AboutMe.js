'use client';

import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Title with glow effect */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-orbitron
                      [text-shadow:_0_0_30px_rgba(135,112,103,0.3)]
                      transition-all duration-700 hover:scale-105">
            About Me
          </h2>
          
          {/* Introduction with highlight effect */}
          <div className="space-y-8 text-gray-200 font-space-grotesk"> {/* Brightened base text */}
            <p className="text-lg leading-relaxed transition-all duration-300 
                       hover:-translate-y-1 hover:text-white group">
              Hey there! I&apos;m <span className="text-[#b39c94] font-semibold 
                                           group-hover:text-white group-hover:underline
                                           transition-colors duration-300">Rohan Sharma</span>, 
              a Computer Science enthusiast with a flair for blending tech with real-world impact. 
              From full-stack web apps to AI-driven solutions, I thrive on solving meaningful problems — 
              and <span className="italic text-[#b39c94] group-hover:text-white">hackathons are my playground</span>.
            </p>

            <p className="text-lg leading-relaxed transition-all duration-300 
                       hover:-translate-y-1 hover:text-white group">
              <span className="text-transparent bg-clip-text bg-gradient-to-r 
                            from-[#b39c94] to-white group-hover:from-white group-hover:to-[#b39c94]
                            transition-all duration-500">💡</span> Whether its optimizing disaster response, 
              predicting pandemics, or decoding social media trends, I love turning complex ideas into 
              intuitive, scalable systems. My journey has taken me from data pipelines to deploying 
              intelligent UIs — and I&apos;m just getting started.
            </p>

            {/* Enhanced Skills Section */}
            <div className="space-y-4 p-6 rounded-xl backdrop-blur-md bg-[#b39c94]/10
                         hover:bg-[#b39c94]/15 transition-all duration-300
                         border border-[#b39c94]/20">
              <p className="text-xl font-semibold text-[#b39c94] mb-4">🛠️ I specialize in:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['MERN Stack', 'Python', 'Flask', 'React', 'AI/ML', 'OCR/NLP', 'Data Visualization']
                  .map((skill, index) => (
                    <span key={index} 
                          className="px-6 py-2.5 rounded-full text-base bg-gradient-to-r 
                                   from-[#b39c94]/10 to-[#b39c94]/20 text-white
                                   hover:from-[#b39c94]/20 hover:to-[#b39c94]/30 
                                   hover:scale-105 hover:shadow-[0_0_20px_rgba(179,156,148,0.4)]
                                   transition-all duration-300 border border-[#b39c94]/30
                                   backdrop-blur-lg transform hover:-translate-y-0.5">
                      {skill}
                    </span>
                  ))}
              </div>
            </div>

            <p className="text-lg italic leading-relaxed transition-all duration-300 
                       hover:-translate-y-1 hover:text-white
                       p-6 rounded-xl backdrop-blur-md bg-[#b39c94]/10
                       border border-[#b39c94]/20">
              <span className="text-[#b39c94]">🎯</span> &quot;Beyond the screen, I channel my passion into 
              leading tech clubs and organizing campus hackathons &mdash; turning curiosity into community, 
              and ideas into impact.&quot;
            </p>
          </div>

          {/* Stats Grid remains the same */}
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