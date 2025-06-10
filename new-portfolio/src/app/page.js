import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import TechnicalSkills from "@/components/TechnicalSkills";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroSection />
      <AboutMe />
      <TechnicalSkills />
      <FeaturedProjects />
    </div>
  );
}
