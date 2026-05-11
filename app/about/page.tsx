import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import PhilosophySection from "@/components/PhilosophySection";
import FocusSection from "@/components/FocusSection";
import SkillsSection from "@/components/SkillsSection";
import ExploringSection from "@/components/ExploringSection";
import AboutSidebar from "@/components/AboutSidebar";

export const metadata = {
  title: "About | Dishant",
  description: "I'm Dishant, a developer focused on building digital products, developer tools and internet experiments.",
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "#F4F4F4", minHeight: "100vh" }}>
      
      <div 
        className="max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)] pt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[620px_1fr] gap-[clamp(60px,8vw,120px)]">
          {/* Main content column */}
          <div className="about-content">
            <AboutHero />
            <PhilosophySection />
            <FocusSection />
            <SkillsSection />
            <ExploringSection />
          </div>

          {/* Sticky sidebar column */}
          <div className="hidden lg:block">
            <AboutSidebar />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
