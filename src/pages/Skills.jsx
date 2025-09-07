import { profile } from '../data/profile'
import SectionHeader from '../components/SectionHeader.jsx'
import SkillLogos from '../components/SkillLogos.jsx'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section className="section bg-gradient-to-b from-white to-brand-50/40 dark:from-[#0b1020] dark:to-[#0b1020]">
      <div className="container-base">
        <SectionHeader title="Skills" subtitle="Tools I use to build" />
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(profile.skills).map(([group, items], idx) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="card"
            >
              <h3 className="h3 mb-3">{group}</h3>
              <SkillLogos
                items={items}
                layout="grid"
                gridCols="grid-cols-3"   // 3 per row
                showLabels
                size={26}
              />

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
