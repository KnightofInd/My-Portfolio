'use client';

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-parallax">
        <Image
          src="/cityscape.jpg"
          alt="Futuristic Cityscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm" />
      </div>

      {/* Content Layout */}
      <div className="relative z-20 flex items-center min-h-screen">
        {/* Profile Section */}
        <div className="hidden lg:block relative w-1/2 h-screen">
          <div className="flex items-center justify-center h-full">
            <div className="relative w-[640px] h-[640px] rounded-2xl overflow-hidden profile-container">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
              <div className="profile-overlay" />
              <div className="profile-vignette" />
              <div className="profile-gradient-right" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 content-section">
          <div className="max-w-2xl mx-auto lg:mr-0">
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-glow">
              From Neural Nets to Engine Sets —
              <br />
              I Engineer Intelligence
            </h1>
            
            <div className="text-xl md:text-2xl text-[#e2d5d1] font-space-grotesk mb-8">
              <span className="typing-text">Data Scientist</span>
              <p className="mt-4 opacity-90">
                Bridging the gap between AI innovation and automotive excellence
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/projects" className="button-primary">
                View Projects
              </Link>
              <Link href="/resume.pdf" className="button-secondary">
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
