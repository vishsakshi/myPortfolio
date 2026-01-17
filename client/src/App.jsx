import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-slate-900 via-slate-950 to-black
        text-white
        h-fit
        overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
