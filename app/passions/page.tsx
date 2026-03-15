import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PassionsHero from "@/components/PassionsHero";
import FilmsSection from "@/components/FilmsSection";
import MusicSection from "@/components/MusicSection";
import TrainingSection from "@/components/TrainingSection";
import IdeasSection from "@/components/IdeasSection";
import BookSection from "@/components/BookSection";
import NextStepsSection from "@/components/NextStepsSection";
import PosterStack from "@/components/PosterStack";

export const metadata = {
  title: "Passions | Dishant",
  description: "Personal inspirations, films, music, and the ideas that shape how I think about building products.",
};

export default function PassionsPage() {
  return (
    <main style={{ backgroundColor: "#F4F4F4", minHeight: "100vh" }}>
      <Navbar />
      
      <div 
        className="max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)] pt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[640px_420px] gap-[120px]">
          {/* Main content column */}
          <div className="flex flex-col gap-[clamp(100px,12vw,140px)]">
            <PassionsHero />
            <FilmsSection />
            <MusicSection />
            <TrainingSection />
            <IdeasSection />
            <BookSection />
            <NextStepsSection />
          </div>

          {/* Sticky Poster Stack column */}
          <div className="hidden lg:block relative">
            <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <PosterStack />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
