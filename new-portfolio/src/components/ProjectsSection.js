'use client';
import { useEffect, useRef } from 'react';

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "LangGrpah Based AI Debate Agent",
      description: "Two AI agents debating on a topic using LangGraph, showcasing advanced AI capabilities.",
      technologies: ["Python", "LangGraph", "LangChain", "Graphviz", "Flask"],
      link: "https://github.com/KnightofInd/LangGraph-Based-AI-Debate-System",
      image: "/projects/project1.png"
    },
    {
      title: "AutoPubX - Automated Book Publication Workflow",
      description: "AI Based Automated Book Publishing platform that simplifies the publishing process using AI Tools and RL Search Algorithm for optimal book creation.",
      technologies: ["Python", "RL Search", "Transformers", "API","Vector Db","Playwright"],
      link: "https://github.com/KnightofInd/AutoPubX-Intelligent-Book-Creation-Pipeline",
      image: "/projects/project2.png"
    },
    {
      title: "Vault - Value-driven AI Universe for Lending & Tech-funding",
      description: "Advanced AI-powered platform for lending and tech funding, using the AI and Blockchain technologies.",
      technologies: ["Python", "TensorFlow", "NextJs", "AWS", "Blockchain","API", "Supabase"],
      link: "https://github.com/hackathon44/hackwebsite",
      image: "/projects/project3.png"
    },
    {
      title: "Swasthya Setu",
      description: "Real-time cryptocurrency dashboard with price tracking, portfolio management, and market analysis tools.",
      technologies: ["Vue.js", "Chart.js", "WebSocket", "Firebase"],
      link: "https://swasthya-setu-chi.vercel.app/",
      image: "/projects/project4.png"
    },
    {
      title: "Real Time Disaster Information Aggregation System",
      description: "A solution for real-time intelligent disaster information aggregation using AI and NLP technologies",
      technologies: ["Python", "VectorDb", "ReactJs", "Plotly", "Flask"],
      link: "https://github.com/yourusername/travel-blog",
      image: "/projects/project5.png"
    },
    {
      title: "Fitness Tracker App",
      description: "A mobile-friendly app to track workouts, nutrition, and progress, featuring charts, reminders, and social features.",
      technologies: ["React Native", "D3.js", "Firebase"],
      link: "https://github.com/yourusername/fitness-tracker",
      image: "/projects/project6.png"
    },
    {
      title: "Online Learning Portal",
      description: "A platform for interactive courses, quizzes, and certificates, with a modern UI and gamified experience.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
      link: "https://github.com/yourusername/learning-portal",
      image: "/projects/project7.png"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-10 px-2 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            // Center the last card if it's the only one in the last row
            const isLast = index === projects.length - 1;
            const shouldCenter = projects.length % 3 === 1 && isLast;
            return (
              <div
                key={index}
                className={
                  "project-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out relative bg-gradient-to-br from-[#0B1923] via-[#22303C] to-[#3E4E5A] rounded-[2.2rem] p-0 border border-[#CEA17A]/40 shadow-[0_8px_32px_0_rgba(14,23,35,0.25)] hover:shadow-[0_0_40px_10px_rgba(206,161,122,0.18)] hover:border-[#CEA17A]/80 group overflow-hidden flex flex-col" +
                  (shouldCenter ? " lg:col-start-2" : "")
                }
              >
                {/* Diagonal highlight stripe */}
                <span className="pointer-events-none absolute left-0 top-1/4 w-full h-8 bg-gradient-to-r from-[#ffffff22] via-[#CEA17A22] to-transparent rotate-[-8deg] blur-[2px] opacity-40" />
                {/* Gold line accent at bottom */}
                <span className="pointer-events-none absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#CEA17A] via-[#CEA17A99] to-transparent opacity-80" />
                {/* Accent border glow */}
                <span className="pointer-events-none absolute inset-0 rounded-[2.2rem] border-2 border-transparent group-hover:border-[#CEA17A]/60 group-hover:shadow-[0_0_40px_0_rgba(206,161,122,0.18)] transition-all duration-500" />
                {/* Project image */}
                <div className="relative w-full h-48 md:h-44 lg:h-40 xl:h-52 rounded-t-[2.2rem] overflow-hidden border-b border-[#CEA17A]/20 bg-[#09171F]">
                  <img
                    src={project.image}
                    alt={project.title + ' image'}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="flex-1 flex flex-col p-8">
                  <h3 className="text-2xl font-bold text-[#CEA17A] mb-4 group-hover:text-white font-orbitron tracking-wide drop-shadow-[0_0_10px_rgba(206,161,122,0.15)] uppercase letter-spacing-[0.08em]">
                    {project.title}
                  </h3>
                  <p className="text-[#E5D6C5] mb-6 text-base leading-relaxed min-h-[72px]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-semibold bg-[#CEA17A]/10 text-[#CEA17A] rounded-full border border-[#CEA17A]/30 shadow-[0_0_8px_0_rgba(206,161,122,0.10)] backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-[#CEA17A]/20 text-[#CEA17A] rounded-xl border border-[#CEA17A]/40 hover:bg-[#CEA17A]/40 hover:text-[#09171F] font-semibold shadow-[0_0_15px_rgba(206,161,122,0.15)] hover:shadow-[0_0_30px_rgba(206,161,122,0.25)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#CEA17A]/40 focus:ring-offset-2 focus:ring-offset-[#09171F]"
                  >
                    View Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
