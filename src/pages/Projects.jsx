import { profile } from '../data/profile'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section className="section bg-ink-50/60 dark:bg-white/5">
      <div className="container-base">
        <SectionHeader title="Projects" subtitle="Selected work and experiments" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="grid md:grid-cols-2 gap-6 items-stretch"     
        >
          {profile.projects.map((p) => (
            <motion.div
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              className="h-full"                                  
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
