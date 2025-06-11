'use client';

import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Microsoft Azure Hackathon Winner",
      event: "AI Innovation Challenge 2024",
      description: "First place in developing an AI-powered automotive diagnostic system",
      date: "March 2024",
      badge: "🏆 1st Place"
    },
    {
      id: 2,
      title: "Data Science Hackathon Finalist",
      event: "Global Data Challenge",
      description: "Developed predictive analytics solution for autonomous vehicles",
      date: "January 2024",
      badge: "🌟 Finalist"
    },
    {
      id: 3,
      title: "AI/ML Hackathon Winner",
      event: "TechFest 2023",
      description: "Created innovative machine learning solution for vehicle performance optimization",
      date: "November 2023",
      badge: "🏆 Winner"
    },
    {
      id: 4,
      title: "Automotive Tech Hackathon",
      event: "AutoTech Summit",
      description: "Developed real-time vehicle diagnostics using IoT sensors",
      date: "September 2023",
      badge: "🎯 Top 5"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white font-orbitron mb-16
                    [text-shadow:_0_0_30px_rgba(135,112,103,0.3)]">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="group relative overflow-hidden rounded-xl bg-[#877067]/5 p-6
                       backdrop-blur-sm border border-[#877067]/10
                       hover:bg-[#877067]/10 transition-all duration-300
                       transform hover:scale-[1.02]"
            >
              {/* Achievement Badge */}
              <div className="absolute top-4 right-4 bg-[#877067]/20 px-3 py-1 rounded-full
                            text-sm font-medium text-white backdrop-blur-md">
                {achievement.badge}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white font-orbitron
                             group-hover:text-[#877067] transition-colors duration-300">
                  {achievement.title}
                </h3>
                <div className="text-gray-400 text-sm">{achievement.date}</div>
                <div className="text-[#877067] font-medium">{achievement.event}</div>
                <p className="text-gray-300">
                  {achievement.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#877067]/5
                            rounded-full blur-2xl -mr-16 -mb-16 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
