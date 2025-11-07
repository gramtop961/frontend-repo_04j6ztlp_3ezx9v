import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b0e14] py-20 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-6 max-w-3xl text-zinc-300"
        >
          I’m Ubai, a full-stack engineer from Bekasi, Indonesia. Since 2021 I’ve been building
          backend APIs, hybrid SPA systems, and handling server deployments with a focus on reliability
          and clarity. I like systems that stay fast under load, code that explains itself, and workflows
          that are calm, disciplined, and repeatable.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-4 max-w-3xl text-zinc-300"
        >
          Personality-wise, I’m analytical and forward‑thinking with a healthy dose of skepticism.
          But jangan kaku — I keep things friendly and easygoing. Good systems are built by
          people who can communicate, iterate, and laugh a little while shipping.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
