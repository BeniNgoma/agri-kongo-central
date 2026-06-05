import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programme from "@/components/sections/Programme";
import Resultats from "@/components/sections/Resultats";
import Activites from "@/components/sections/Activites";
import Impacts from "@/components/sections/Impacts";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programme />
        <Resultats />
        <Activites />
        <Impacts />
<Contact />
      </main>
      <Footer />
    </>
  );
}
