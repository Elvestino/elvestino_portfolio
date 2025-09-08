import AboutMeSection from "./pages/about/AboutMe";
import ContactSection from "./pages/contact/Contact";
import HomeSection from "./pages/Home/Home";
import ProjectsSection from "./pages/projects/Project";
import ResumeSection from "./pages/resume/Resume";
export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto text-white flex flex-col max-md:pt-10">
      {/* Section Home */}
      <section id="home" className="md:pt-20">
        <HomeSection />
      </section>

      {/* Section About Me */}
      <section id="about">
        <AboutMeSection />
      </section>

      {/* Section Resume */}
      <section id="resume">
        <ResumeSection />
      </section>

      {/* Section Projects */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Section Contact */}
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
