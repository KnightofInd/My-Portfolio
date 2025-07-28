import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";

export const metadata = {
  title: "Rohan Sharma | Portfolio",
  description: "Showcase of Rohan Sharma's work, skills, and achievements. Data Scientist, AI/ML Engineer, Full Stack Developer.",
  keywords: [
    "Rohan Sharma", "Portfolio", "Data Scientist", "AI/ML Engineer", "Full Stack Developer", "Projects", "Gallery", "Achievements"
  ],
  openGraph: {
    title: "Rohan Sharma | Portfolio",
    description: "Showcase of Rohan Sharma's work, skills, and achievements. Data Scientist, AI/ML Engineer, Full Stack Developer.",
    url: "https://your-portfolio-domain.com/",
    siteName: "Rohan Sharma Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
        alt: "Rohan Sharma Portfolio Hero Image"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Sharma | Portfolio",
    description: "Showcase of Rohan Sharma's work, skills, and achievements.",
    images: ["/profile.jpg"]
  }
};

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
