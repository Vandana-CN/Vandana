import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ p }) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="card h-full flex flex-col min-h-[260px]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="h3">{p.title}</h3>
          <p className="text-sm text-ink-600 dark:text-white/60">{p.period}</p>
        </div>

        
        {p.demo && (
          <a className="btn btn-ghost" href={p.demo} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>

      
      <div className="mt-3 flex-1 space-y-3">
        <p className="text-[15px] leading-6">{p.description}</p>

        {(p.repo || p.code) && (
          <a
            href={p.repo || p.code}
            target="_blank"
            rel="noreferrer"
            aria-label="View source code on GitHub"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl
                      border border-ink-100 dark:border-white/10
                      bg-white dark:bg-white/5
                       hover:shadow-md hover:-translate-y-0.5
                      transition no-underline text-ink-700 hover:text-ink-900
                      dark:text-white/80 dark:hover:text-white
                      focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          >
            <FaGithub size={18} />
            <span className="font-medium">Source Code</span>
          </a>
        )}
      </div>

      {p.tech?.length ? (
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}
