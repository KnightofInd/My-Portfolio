"use client";

import { type } from 'os';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const AboutMe: FC = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Data Science', level: 85 },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 }
    })
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-4 bg-gradient-to-r from-white via-[#877067] to-white text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#877067] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p 
              variants={cardVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I'm a passionate Full Stack Developer and Data Scientist with a keen interest in automotive technology. 
              With expertise in both frontend and backend development, I create seamless digital experiences while 
              leveraging data science to solve complex problems.
            </motion.p>
            
            {/* Hackathon Achievements */}
            <div className="mt-8">
              <h3 className="text-2xl font-syne font-bold text-[#877067] mb-6">
                Hackathon Victories
              </h3>
              <motion.div 
                className="grid grid-cols-1 gap-4"
                variants={cardVariants}
              >
                { [
                  { title: "TechCrunch Disrupt 2024", position: "1st Place" },
                  { title: "Microsoft Imagine Cup 2024", position: "Winner" },
                  { title: "Google Solution Challenge", position: "Global Finalist" },
                  { title: "HackMIT 2023", position: "Grand Prize" },
                  { title: "AI Hackathon 2024", position: "1st Place" },
                  { title: "Web3 Global Hackathon", position: "Winner" },
                  { title: "MLH Fellowship Hack", position: "Best Innovation" },
                  { title: "AWS Community Hackathon", position: "1st Place" }
                ].map((hack) => (
                  <motion.div
                    key={hack.title}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-black/40 backdrop-blur-sm border border-[#877067]/20 hover:border-[#877067]/40 transition-all duration-300"
                  >
                    <h4 className="text-white font-medium">{hack.title}</h4>
                    <p className="text-[#877067]">{hack.position}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-syne font-bold text-[#877067] mb-8">
              Technical Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-[#877067]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#877067] to-white rounded-full"
                      variants={barVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={skill.level}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        >
          {/*
            {
              title: "Experience",
              value: "3+ Years",
              description: "Full Stack Development"
            },
            {
              title: "Languages",
              value: "8+",
              description: "Programming Languages"
            }
          */}
          { [
            {
              title: "Experience",
              value: "3+ Years",
              description: "Full Stack Development"
            },
            {
              title: "Languages",
              value: "8+",
              description: "Programming Languages"
            }
          ].map((stat) => (
            <motion.div
              key={stat.title}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-[#877067]/20 hover:border-[#877067]/40 transition-all duration-300"
            >
              <h4 className="text-xl font-syne font-bold text-[#877067] mb-2">
                {stat.title}
              </h4>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;