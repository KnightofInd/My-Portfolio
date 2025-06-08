"use client";

import { motion } from 'framer-motion';
import type { FC } from 'react';

const AboutMe: FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p 
              variants={cardVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I'm a passionate Full Stack Developer and Data Scientist with a keen interest in automotive technology. 
              With expertise in both frontend and backend development, I create seamless digital experiences while 
              leveraging data science to solve complex problems.
            </motion.p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
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

          {/* Hackathon Achievements */}
          <div className="mt-8">
            <h3 className="text-2xl font-syne font-bold text-[#877067] mb-8 text-center">
              Major Hackathon Victories
            </h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              { [
                { 
                  title: "Microsoft Imagine Cup 2024",
                  position: "Global Winner",
                  description: "AI/ML Track"
                },
                { 
                  title: "TechCrunch Disrupt",
                  position: "1st Place",
                  description: "Web3 Innovation"
                },
                { 
                  title: "Google Solution Challenge",
                  position: "Global Finalist",
                  description: "Sustainability Track"
                },
                { 
                  title: "AWS Community Hackathon",
                  position: "1st Place",
                  description: "Cloud Computing"
                }
              ].map((hack) => (
                <motion.div
                  key={hack.title}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-[#877067]/20 hover:border-[#877067]/40 transition-all duration-300"
                >
                  <h4 className="text-white font-medium text-lg mb-1">{hack.title}</h4>
                  <p className="text-[#877067] font-bold mb-1">{hack.position}</p>
                  <p className="text-gray-400 text-sm">{hack.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;