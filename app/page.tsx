import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SeeAllProjects from "@/components/SeeAllProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <SeeAllProjects />
      <Footer />
    </main>
  );
}
