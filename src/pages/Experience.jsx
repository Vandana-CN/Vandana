import { profile } from '../data/profile'
import SectionHeader from '../components/SectionHeader.jsx'
import { motion } from 'framer-motion'

const LOGO = {
  "Entain (formerly Ivy)": "/logos/Entain.jpg",
  "Hexagon": "/logos/Hexagon.jpg",
  "Insight Tutors": "/logos/Insight.png",
};

export default function Experience() {
  return (
    <section className="section bg-ink-50/40 dark:bg-white/5">
      <div className="container-base">
        <SectionHeader title="Experience" subtitle="Roles, responsibilities, and impact" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="space-y-6"
        >
          {profile.experience.map((job) => (
            <motion.div
              key={job.company}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
                {LOGO[job.company] && (
                    <div
                      className="
                        w-[72px] h-[72px]                /* adjust to taste: 64px = w-16 h-16 */
                        rounded-lg overflow-hidden
                        bg-white dark:bg-transparent
                        border border-ink-100/60 dark:border-transparent
                        shadow-soft dark:shadow-none
                        flex items-center justify-center
                      "
                    >
                      <img
                        src={LOGO[job.company]}
                        alt={job.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                <div className="flex-1 mt-2 md:mt-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="h3">{job.role} · {job.company}</h3>
                      <p className="text-sm text-ink-600 dark:text-white/60">{job.period}</p>
                    </div>
                    <div className="text-sm text-ink-600 dark:text-white/60">{job.location}</div>
                  </div>
                  <ul className="mt-4 list-disc pl-5 space-y-2">
                    {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                  {job.stack?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.stack.map((s) => <span key={s} className="badge">{s}</span>)}
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
