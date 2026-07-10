import Hero from "@/components/home/Home";
import About from "@/components/about/About";
import Technologies from "@/components/technologies/Technologies";
import Certifications from "@/components/certifications/Certifications";
import Experience from "@/components/experience/Experience";
import Project from "@/components/project/Project";
import Contact from "@/components/contact/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Certifications />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}
