import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0e14] text-zinc-100">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0b0e14]/60 via-[#0b0e14]/70 to-[#0b0e14]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Building Systems that Work — and Keep Working.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 max-w-2xl text-lg text-zinc-300 sm:text-xl"
        >
          Hi, I’m Ubai — engineer, problem-solver, and code mechanic from Bekasi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => handleScroll('projects')}
            className="group inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-5 py-3 text-sm font-medium text-zinc-100 backdrop-blur transition hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-zinc-900"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="inline-flex items-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
