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
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS featuring smooth animations and a dark, futuristic theme.",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      link: "https://github.com/yourusername/portfolio",
      image: "/gallery/photo1.jpg"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, product management, and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/yourusername/ecommerce",
      image: "/gallery/photo2.jpg"
    },
    {
      title: "AI Image Generator",
      description: "Web application that generates unique images using AI models, featuring user galleries and social sharing.",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      link: "https://github.com/yourusername/ai-image-gen",
      image: "/gallery/photo3.jpg"
    },
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency dashboard with price tracking, portfolio management, and market analysis tools.",
      technologies: ["Vue.js", "Chart.js", "WebSocket", "Firebase"],
      link: "https://github.com/yourusername/crypto-dashboard",
      image: "/gallery/photo4.jpg"
    },
    {
      title: "Travel Blog Platform",
      description: "A beautiful blogging platform for travelers to share stories, photos, and maps, with a focus on immersive visuals and easy publishing.",
      technologies: ["Next.js", "Tailwind CSS", "Mapbox", "Sanity.io"],
      link: "https://github.com/yourusername/travel-blog",
      image: "/gallery/photo5.jpg"
    },
    {
      title: "Fitness Tracker App",
      description: "A mobile-friendly app to track workouts, nutrition, and progress, featuring charts, reminders, and social features.",
      technologies: ["React Native", "D3.js", "Firebase"],
      link: "https://github.com/yourusername/fitness-tracker",
      image: "/gallery/photo6.jpg"
    },
    {
      title: "Online Learning Portal",
      description: "A platform for interactive courses, quizzes, and certificates, with a modern UI and gamified experience.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
      link: "https://github.com/yourusername/learning-portal",
      image: "/gallery/photo7.jpg"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-10 px-2 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#b39c94] mb-16 text-center font-orbitron tracking-tight drop-shadow-[0_0_30px_rgba(135,112,103,0.3)]">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out relative bg-gradient-to-br from-[#0B1923] via-[#22303C] to-[#3E4E5A] rounded-[2.2rem] p-0 border border-[#CEA17A]/40 shadow-[0_8px_32px_0_rgba(14,23,35,0.25)] hover:shadow-[0_0_40px_10px_rgba(206,161,122,0.18)] hover:border-[#CEA17A]/80 group overflow-hidden flex flex-col"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
