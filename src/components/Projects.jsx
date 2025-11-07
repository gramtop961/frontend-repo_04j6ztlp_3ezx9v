import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'BDSPT Core System',
    description:
      'A hybrid Laravel + Vue platform running in Docker containers with Octane and Nginx reverse proxy — manages insurance wakaf workflows from agent onboarding to transaction reporting.',
    tags: ['SPA hybrid', 'Vue Router fallback', 'Multi-role access', 'Containerized'],
  },
  {
    title: 'Transaction Analytics Dashboard',
    description:
      'A data-driven visualization layer using Vuetify DataTable Virtual and Laravel API endpoints for monthly performance charts, role-based insights, and contribution analytics.',
    tags: ['Vuetify', 'Laravel API', 'Charts', 'RBAC'],
  },
  {
    title: 'Asuransi Wakaf System',
    description:
      'End-to-end policy management bridging agents, da’i, and providers — with PDF generation, image compression queueing, and server-side batch processing for scalability.',
    tags: ['PDF', 'Queues', 'Batch processing', 'Scalable'],
  },
  {
    title: 'E-Ay — The Personal Assistant',
    description:
      'A chatbot for personal workflow automation with adaptive personality logic, context persistence, and language switching.',
    tags: ['Chatbot', 'Context', 'i18n'],
  },
  {
    title: 'Lark API Integration Layer',
    description:
      'Node.js middleware for authorization scopes, OAuth, and bot messaging for Lark internal apps with structured logging and message utilities.',
    tags: ['Node.js', 'OAuth', 'Bots', 'Logging'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-[#0b0e14] py-20 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 transition group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(16,185,129,0.12), transparent 40%)'}} />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-zinc-700/60 bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <script dangerouslySetInnerHTML={{__html: `
          document.querySelectorAll('[data-spotlight]')?.forEach(card => {
            card.addEventListener('pointermove', e => {
              card.style.setProperty('--x', e.offsetX + 'px');
              card.style.setProperty('--y', e.offsetY + 'px');
            });
          });
        `}} />
      </div>
    </section>
  );
};

export default Projects;
