import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Academy from "./components/Academy";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Publications from "./components/Publications";
import Organizations from "./components/Organizations";

const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Academy />
        <Experience />
        <Projects />
        <Publications />
        <Organizations />
        <Contact />
      </div>
    </div>
  );
};

export default App;
