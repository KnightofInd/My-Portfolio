'use client';

import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHandshake } from 'react-icons/fa';

const Contact = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Social media data
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/KnightofInd',
      color: '#333',
      hoverColor: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/rohanstech/',
      color: '#0077B5',
      hoverColor: 'hover:text-[#0077B5]'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:knightofind@gmail.com',
      color: '#EA4335',
      hoverColor: 'hover:text-[#EA4335]'
    }
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate position for each icon in the circle
  const getIconPosition = (index, total) => {
    // For 3 icons, place them at 120-degree intervals starting from top
    const angle = (index * 120) - 90; // -90 to start from top, 120 degrees apart
    const radius = 150; // Match the middle background ring (300px diameter / 2)
    const radian = (angle * Math.PI) / 180;
    
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
    >
      {/* Background with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#826c63]/20 via-transparent to-[#826c63]/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className={`mb-32 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Let's <span className="text-[#826c63]">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to collaborate or discuss opportunities? Let's start a conversation.
          </p>
        </div>

        {/* Radial Menu Container */}
        <div className="relative flex items-center justify-center min-h-[400px] -mt-16">
          {/* Social Icons - Radial Layout */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {socialLinks.map((social, index) => {
              const position = getIconPosition(index, socialLinks.length);
              const IconComponent = social.icon;
              
              return (
                <div
                  key={social.name}
                  className={`absolute w-16 h-16 flex items-center justify-center 
                            bg-gradient-to-br from-[rgba(20,20,20,0.95)] to-[rgba(15,15,15,0.9)]
                            backdrop-blur-md rounded-full border-2 border-[#826c63]/30
                            hover:border-[#826c63] hover:scale-110 cursor-pointer
                            transition-all duration-500 ease-out group
                            ${isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: isExpanded 
                      ? `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(1)`
                      : 'translate(-50%, -50%) scale(0.5)',
                    transitionDelay: isExpanded ? `${index * 100}ms` : '0ms'
                  }}
                  onClick={() => window.open(social.url, '_blank')}
                >
                  {/* Icon */}
                  <IconComponent 
                    className={`text-2xl text-white transition-all duration-300 
                              group-hover:scale-110 ${social.hoverColor}`}
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {social.name}
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#826c63]/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          {/* Central Connect Button */}
          <div
            className={`relative z-20 w-32 h-32 flex flex-col items-center justify-center 
                      bg-gradient-to-br from-[#826c63] to-[#9b8378] 
                      rounded-full cursor-pointer group
                      transform transition-all duration-500 ease-out
                      hover:scale-110 hover:shadow-[0_0_50px_rgba(130,108,99,0.6)]
                      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                      ${isExpanded ? 'bg-gradient-to-br from-[#9b8378] to-[#826c63]' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
            onMouseEnter={() => setIsExpanded(true)}
            style={{
              transitionDelay: isVisible ? '200ms' : '0ms'
            }}
          >
            {/* Icon */}
            <FaHandshake className={`text-3xl text-white mb-1 transition-all duration-300 
                                   ${isExpanded ? 'rotate-12 scale-110' : ''}`} />
            
            {/* Text */}
            <span className="text-xs font-medium text-white opacity-90">
              Connect
            </span>

            {/* Pulse effect */}
            <div className={`absolute inset-0 rounded-full border-2 border-white/30 
                           ${isExpanded ? 'animate-ping' : ''}`} />
            
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full border-2 border-transparent 
                           bg-gradient-to-r from-white/20 via-transparent to-white/20 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500
                           animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          {/* Instruction Text */}
          <div className={`absolute -bottom-20 left-1/2 transform -translate-x-1/2
                         transition-all duration-1000 ${
                           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                         }`}
               style={{ transitionDelay: '800ms' }}>
            <p className="text-gray-400 text-sm">
              {isExpanded ? 'Choose your preferred platform' : 'Hover to explore connection options'}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none -mt-16">
          {/* Animated rings */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full border border-[#826c63]/20
                        ${isExpanded ? 'animate-pulse' : ''}`}
              style={{
                width: `${160 + i * 80}px`,  // 160px, 240px, 320px - better alignment with icon radius
                height: `${160 + i * 80}px`,
                left: `${-80 - i * 40}px`,   // Center the rings properly
                top: `${-80 - i * 40}px`,
                animationDelay: `${i * 200}ms`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#826c63]/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
