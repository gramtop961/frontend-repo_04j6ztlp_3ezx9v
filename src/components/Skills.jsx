import React from 'react';
import { motion } from 'framer-motion';

const SkillGroup = ({ title, items }) => (
  <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
    <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-md border border-zinc-700/60 bg-zinc-800/60 px-3 py-1 text-sm text-zinc-300"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#0b0e14] py-20 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <SkillGroup
            title="Core Stack"
            items={[
              'Laravel', 'Vue 3', 'Pinia', 'Docker', 'Vite', 'Nginx', 'Apache', 'Octane',
            ]}
          />
          <SkillGroup
            title="Workflow & Tools"
            items={[
              'Git', 'GitHub Actions', 'Portainer', 'cPanel/WHM', 'SSH', 'rsync', 'Pest', 'PHPStan',
            ]}
          />
          <SkillGroup
            title="Frontend Touch"
            items={[
              'ShadCN', 'Vuetify', 'Tailwind', 'DataTables', 'Composition API',
            ]}
          />
          <SkillGroup
            title="Deployment"
            items={[
              'Staging/Production pipelines', 'VPS optimization', 'Asset building',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
