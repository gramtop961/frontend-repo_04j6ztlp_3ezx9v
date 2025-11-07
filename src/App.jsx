import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0e14] font-['Inter',system-ui]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Terminal />
      <Contact />

      <footer className="border-t border-zinc-800 bg-[#0b0e14] py-8 text-zinc-400">
        <div className="mx-auto max-w-6xl px-6 text-sm">
          Crafted in Bekasi. Runs on caffeine and clean commits.
        </div>
      </footer>
    </div>
  );
}

export default App;
