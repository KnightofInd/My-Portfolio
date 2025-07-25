import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroSection />
      <AboutMe />
      <Gallery />
      <Achievements />
    </div>
  );
}
