'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFlask, SiExpress, SiFastapi, SiTensorflow, SiPytorch, SiHuggingface } from 'react-icons/si';
import { TbBrandPython } from 'react-icons/tb';

const SkillsPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          icon: FaReact,
          description: "Modern component-based frontend development",
          proficiency: 90
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          description: "Full-stack React framework with SSR and API routes",
          proficiency: 85
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          description: "Utility-first styling for responsive UIs",
          proficiency: 88
        },
        {
          name: "JavaScript",
          icon: () => <span className="text-2xl font-bold">JS</span>,
          description: "Core web technologies for interactive experiences",
          proficiency: 92
        }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Flask",
          icon: SiFlask,
          description: "Lightweight Python framework for APIs",
          proficiency: 85
        },
        {
          name: "Node.js",
          icon: FaNodeJs,
          description: "JavaScript runtime for scalable backend services",
          proficiency: 80
        },
        {
          name: "Express",
          icon: SiExpress,
          description: "Fast web framework for Node.js",
          proficiency: 78
        },
        {
          name: "FastAPI",
          icon: SiFastapi,
          description: "High-performance Python framework for APIs",
          proficiency: 82
        }
      ]
    },
    {
      title: "Data & AI 🧠",
      highlight: true,
      skills: [
        {
          name: "Python",
          icon: FaPython,
          description: "Core programming language for AI & backend",
          proficiency: 95
        },
        {
          name: "TensorFlow",
          icon: SiTensorflow,
          description: "Deep learning framework for model training",
          proficiency: 88
        },
        {
          name: "PyTorch",
          icon: SiPytorch,
          description: "Flexible ML framework for research & production",
          proficiency: 85
        },
        {
          name: "Hugging Face",
          icon: SiHuggingface,
          description: "Pre-trained NLP & LLM models",
          proficiency: 80
        },
        {
          name: "LangChain",
          icon: () => (
            <Image 
              src="/gallery/langchain.png" 
              alt="LangChain"
              width={200}
              height={200}
              className="filter brightness-0 invert"
            />
          ),
          description: "Building LLM pipelines for AI applications",
          proficiency: 75
        },
        {
          name: "PySpark",
          icon: TbBrandPython,
          description: "Distributed data processing for big data workflows",
          proficiency: 78
        }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        {
          name: "Git",
          icon: FaGitAlt,
          description: "Version control and collaboration",
          proficiency: 90
        },
        {
          name: "Docker",
          icon: FaDocker,
          description: "Containerization for scalable deployments",
          proficiency: 82
        },
        {
          name: "AWS",
          icon: FaAws,
          description: "Cloud services for hosting & ML pipelines",
          proficiency: 75
        },
        {
          name: "Power BI",
          icon: () => (
            <Image 
              src="/gallery/Power_BI-Logo.wine.png" 
              alt="Power BI"
              width={200}
              height={200}
              className="filter brightness-0 invert"
            />
          ),
          description: "Business intelligence and data visualization platform",
          proficiency: 88
        }
      ]
    }
  ];

  const SkillCard = ({ skill, index, categoryHighlight }) => {
    const IconComponent = skill.icon;

    return (
      <div
        className={`skill-card group relative bg-gradient-to-br from-[rgba(20,20,20,0.95)] to-[rgba(15,15,15,0.9)] 
                   backdrop-blur-md rounded-2xl p-10 border-2 border-[#826c63]/30
                   hover:border-[#826c63] hover:shadow-[0_0_40px_rgba(130,108,99,0.8),_0_0_80px_rgba(130,108,99,0.4)]
                   transition-all duration-500 ease-out transform
                   ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                   hover:scale-[1.05] hover:-translate-y-2
                   ${categoryHighlight ? 'ring-1 ring-[#826c63]/20' : ''}
                   overflow-hidden
                   hover:bg-gradient-to-br hover:from-[rgba(10,10,10,0.98)] hover:to-[rgba(5,5,5,0.95)]
                   shadow-[0_0_30px_rgba(130,108,99,0.2)]
                   w-[360px] h-[360px]`}
        style={{
          transitionDelay: `${index * 100}ms`,
          boxShadow: '0 0 20px rgba(130,108,99,0.3), inset 0 1px 0 rgba(130,108,99,0.2), 0 0 60px rgba(130,108,99,0.1)'
        }}
      >
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#826c63] via-[#9b8378] to-[#826c63] 
                       opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none
                       animate-pulse" />
        
        {/* Rotating Shine Effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(130,108,99,0.4)] to-transparent
                         opacity-0 group-hover:opacity-100 transition-opacity duration-700
                         transform -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%]
                         transition-transform duration-1000 ease-out" />
        </div>
        
        {/* Inner Border Shine */}
        <div className="absolute inset-[2px] rounded-xl bg-gradient-to-br from-[rgba(20,20,20,0.95)] to-[rgba(15,15,15,0.9)]
                       group-hover:from-[rgba(10,10,10,0.98)] group-hover:to-[rgba(5,5,5,0.95)]
                       transition-all duration-300 
                       shadow-inner group-hover:shadow-[inset_0_0_20px_rgba(130,108,99,0.3)]" />

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          {/* Skill Icon - Scaled up 1.5x */}
          <div className="flex items-center justify-center w-[270px] h-[270px] mx-auto mb-4 rounded-xl 
                         text-white shadow-lg group-hover:scale-110 transition-transform duration-300
                         group-hover:shadow-[0_0_25px_rgba(130,108,99,0.8)]">
            <IconComponent className="text-[12rem]" />
          </div>

          {/* Skill Name */}
          <h3 className="text-lg font-bold text-white font-serif text-center group-hover:text-[#f0f0f0] leading-tight">
            {skill.name}
          </h3>
        </div>

        {/* Description - Hidden by default, shows on hover with smooth center animation */}
        <div className="absolute inset-0 flex items-center justify-center p-6
                       bg-gradient-to-br from-[rgba(15,15,15,0.98)] to-[rgba(10,10,10,0.95)]
                       backdrop-blur-sm rounded-2xl border-2 border-[#826c63]/50
                       opacity-0 group-hover:opacity-100
                       transform translate-y-4 group-hover:translate-y-0
                       transition-all duration-300 ease-out z-20">
          <p className="text-white text-base text-center leading-relaxed font-medium max-w-[280px]">
            {skill.description}
          </p>
        </div>

        {/* Enhanced Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#826c63]/15 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Outer Glow Ring */}
        <div className="absolute inset-[-4px] rounded-2xl bg-gradient-to-r from-[#826c63]/20 via-transparent to-[#826c63]/20
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />
      </div>
    );
  };

  return (
    <div className="min-h-screen relative pt-8 pb-16 overflow-hidden">
      {/* Cityscape Background with Blur */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/cityscape.jpg')",
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Technical <span className="text-[#826c63]">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A comprehensive overview of my technical expertise in modern web development, 
            data science, and artificial intelligence technologies.
          </p>
          
          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#826c63] to-[#9b8378] mx-auto mt-8 rounded-full" />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-4">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-16">
            {/* Category Title */}
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-serif font-bold text-white mb-4
                           ${category.highlight ? 'text-[#826c63]' : ''}`}>
                {category.title}
              </h2>
              {category.highlight && (
                <p className="text-lg text-gray-300 italic">
                  My core expertise in artificial intelligence and data science
                </p>
              )}
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-10">
              {category.skills.map((skill, skillIndex) => {
                const globalIndex = skillCategories
                  .slice(0, categoryIndex)
                  .reduce((acc, cat) => acc + cat.skills.length, 0) + skillIndex;
                
                return (
                  <SkillCard 
                    key={skill.name}
                    skill={skill}
                    index={globalIndex}
                    categoryHighlight={category.highlight}
                  />
                );
              })}
            </div>

            {/* Category Divider */}
            {categoryIndex < skillCategories.length - 1 && (
              <div className="flex items-center justify-center mt-16">
                <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#826c63] to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Final Decorative Line */}
      <div className="container mx-auto px-4 mt-16">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#826c63] to-transparent" />
      </div>
      </div>
    </div>
  );
};

export default SkillsPage;
