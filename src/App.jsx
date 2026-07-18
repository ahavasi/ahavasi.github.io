import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
