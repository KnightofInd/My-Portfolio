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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: custom * 0.2,
        ease: "easeOut"
      }
    })
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "backOut" }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-4 bg-gradient-to-r from-white via-[#877067] to-white text-transparent bg-clip-text hover:bg-gradient-to-l transition-all duration-500">
            About Me
          </h2>
          <motion.div 
            className="w-24 h-1 bg-[#877067] mx-auto rounded-full"
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
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
              variants={textVariants}
              custom={1}
              className="text-gray-300 text-lg leading-relaxed space-y-4"
            >
              I'm a <span className="font-bold text-white">full-stack developer</span> and <span className="font-bold text-white">data analyst</span> with a passion for building and tuning—whether it's engines or applications. 
              <motion.span 
                variants={textVariants}
                custom={2}
                className="block mt-4"
              >
                I enjoy turning ideas into working systems using tools like <span className="font-bold text-white">React</span>, <span className="font-bold text-white">Node.js</span>, <span className="font-bold text-white">Python</span>, and <span className="font-bold text-white">SQL</span>.
              </motion.span>
              <motion.span 
                variants={textVariants}
                custom={3}
                className="block mt-4"
              >
                Just like fine-tuning a car for better performance, I optimize code and data to run <span className="font-bold text-white">smoother</span>, <span className="font-bold text-white">faster</span>, and <span className="font-bold text-white">smarter</span>.
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Stats Cards with enhanced animations */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

          {/* Hackathon Achievements with enhanced animations */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-syne font-bold text-[#877067] mb-8 text-center"
            >
              Major Hackathon Victories
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;