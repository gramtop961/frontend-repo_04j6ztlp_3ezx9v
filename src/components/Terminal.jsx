import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const logsSeed = [
  'git pull origin main — up to date',
  'composer install --no-dev --optimize-autoloader',
  'npm run build:vite',
  'php artisan config:cache',
  'php artisan octane:start — workers=8',
  'docker compose up -d — nginx | app | redis | queue',
  'nginx reload — reverse proxy warm',
  'queue:work — images.compress ✓',
  'deploy done — waktu kopinya pas',
];

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const idxRef = useRef(0);
  const timerRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setLines((prev) => {
        const next = [...prev, logsSeed[idxRef.current % logsSeed.length]];
        idxRef.current += 1;
        return next.slice(-8);
      });
    }, 900);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [lines]);

  return (
    <section className="w-full bg-[#0b0e14] pb-10 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-zinc-800 bg-black/60 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-zinc-400">ubai@server:~</span>
          </div>
          <div
            ref={boxRef}
            className="h-44 overflow-y-auto whitespace-pre-wrap rounded-lg bg-zinc-950/70 p-3 font-mono text-xs leading-relaxed text-zinc-300"
          >
            {lines.map((l, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-emerald-500">$</span>
                <span>{l}</span>
              </div>
            ))}
            <div className="mt-1 animate-pulse text-zinc-500">_</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;
