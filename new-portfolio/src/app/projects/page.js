


import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#b39c94] drop-shadow-[0_0_30px_rgba(135,112,103,0.3)] font-orbitron tracking-tight">
          The Build Log
        </h1>
        <ProjectsSection />
      </div>
    </div>
  );
}
