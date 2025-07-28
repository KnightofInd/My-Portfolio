import ProjectsSection from "@/components/ProjectsSection";

export const metadata = {
  title: "Projects | Rohan Sharma Portfolio",
  description: "Explore featured projects by Rohan Sharma: AI, ML, web apps, automation, and more. Each project highlights modern tech and elegant design.",
  keywords: [
    "Rohan Sharma", "Projects", "Portfolio", "AI", "ML", "Web Development", "Showcase"
  ],
  openGraph: {
    title: "Projects | Rohan Sharma Portfolio",
    description: "Explore featured projects by Rohan Sharma: AI, ML, web apps, automation, and more.",
    url: "https://your-portfolio-domain.com/projects",
    siteName: "Rohan Sharma Portfolio",
    images: [
      {
        url: "/projects/project1.png",
        width: 800,
        height: 600,
        alt: "Rohan Sharma Project Card"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Rohan Sharma Portfolio",
    description: "Explore featured projects by Rohan Sharma: AI, ML, web apps, automation, and more.",
    images: ["/projects/project1.png"]
  }
};

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
