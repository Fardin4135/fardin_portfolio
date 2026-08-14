import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Training from "./components/Training";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Training />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;