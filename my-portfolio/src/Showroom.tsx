"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';

const Showroom: FC = () => {
  const projects = [
    {
      url: '/project1.jpg',
      title: 'AI-Driven Analytics',
      description: 'Machine Learning Implementation',
      tech: 'Python | TensorFlow | React'
    },
    {
      url: '/project2.jpg',
      title: 'Cloud Infrastructure',
      description: 'Scalable Architecture Design',
      tech: 'AWS | Docker | Kubernetes'
    },
    {
      url: '/project3.jpg',
      title: 'E-Commerce Platform',
      description: 'Full-Stack Development',
      tech: 'Next.js | Node.js | MongoDB'
    },
    {
      url: '/project4.jpg',
      title: 'Data Visualization',
      description: 'Interactive Dashboard',
      tech: 'D3.js | TypeScript | GraphQL'
    }
  ];

  return (
    <section className="relative min-h-screen py-20 bg-black">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-syne mb-4 bg-gradient-to-r from-white via-[#877067] to-white text-transparent bg-clip-text">
          Project Showcase
        </h2>
        <motion.div 
          className="w-24 h-1 bg-[#877067] mx-auto rounded-full"
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      {/* Project Gallery */}
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex space-x-8 py-12 px-8"
          initial={{ x: 0 }}
          animate={{ 
            x: [-100, 0],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 25,
                ease: "linear"
              }
            }
          }}
        >
          {projects.concat(projects).map((project, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-80 h-[32rem] rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.url}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white font-bold text-2xl mb-2 font-syne">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="inline-block px-4 py-2 bg-[#877067]/20 rounded-full border border-[#877067]/40">
                    <p className="text-sm text-white">
                      {project.tech}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Edge Fade Effects */}
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Showroom;