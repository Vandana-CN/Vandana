import { profile } from '../data/profile'
import SectionHeader from '../components/SectionHeader.jsx'
import SkillLogos from '../components/SkillLogos.jsx'
import Reveal from '../components/Reveal.jsx'
import { motion } from 'framer-motion'
import EduItem from '../components/EduItem.jsx'
import { FaLinkedin } from "react-icons/fa";


export default function Home() {
const BASE = import.meta.env.BASE_URL;

const eduLogos = {
  "University of Florida, USA": `${BASE}logos/UF.jpg`,
  "Vellore Institute of Technology – AP, India": `${BASE}logos/VIT.png`,
};
  return (
    <div>
      <section className="section hero-bg bg-gradient-to-b from-brand-50 to-white dark:from-[#0b1020] dark:to-[#0b1020]">
        <div className="container-base grid md:grid-cols-2 gap-8 md:gap-16 items-center relative">
          <div className="space-y-6">
          {/* Name (H1) */}
            <Reveal>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="font-extrabold tracking-tight leading-tight
                          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                          whitespace-nowrap"
              >
                <span className="relative inline-block align-baseline">
                  Vandana
                  <motion.span
                    aria-hidden
                    className="absolute left-0 -bottom-1 h-[3px] w-3/4 md:w-4/5 rounded-full
                              bg-gradient-to-r from-brand-600 to-indigo-600"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.9 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </span>{" "}
                Cendrollu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r
                                from-brand-700 to-indigo-600
                                dark:from-brand-300 dark:to-indigo-300">
                  Nagesh
                </span>
              </motion.h1>
            </Reveal>



          {/* Roles (subtitle) */}
          <Reveal delay={0.05}>
          <p className="mt-2 text-[17px] md:text-lg font-medium text-slate-600 dark:text-white/70 ">
            {"Software Engineer · Back\u2011End Developer · Full\u2011Stack Developer"}
          </p>

          </Reveal>

          {/* Degree pill */}
          <Reveal delay={0.1}>
            <div className="mt-2">
              <span className="inline-flex items-center rounded-full
                              bg-brand-600/10 text-brand-700 dark:text-brand-300
                              ring-1 ring-brand-500/20 px-3 py-1
                              text-base md:text-lg font-semibold">
                MS CS @ University of Florida
              </span>
            </div>
          </Reveal>


          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] leading-7 text-ink-600 dark:text-white/80 max-w-[62ch]">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-3">
              {profile.links.resume && (
                <a
                  className="btn btn-primary !h-11 !px-5 shadow-soft hover:-translate-y-0.5 leading-none"
                  href={profile.links.resume ?? `${BASE}resume.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </a>
              )}

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost inline-flex items-center gap-2 !h-11 !px-4 leading-none text-black dark:text-white"
              >
                <FaLinkedin size={16} className="text-current" />
                LinkedIn
              </a>

              <a className="btn btn-ghost !h-11 !px-4 leading-none" href="#/experience">
                See Experience
              </a>
            </div>
          </Reveal>


          </div>

          <div className="flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-brand-600/30 to-accent-500/20 blur-2xl"></div>
              <div className="relative rounded-[24px] p-1 bg-white/70 dark:bg-white/10 border border-ink-100 dark:border-white/10 shadow-soft">
               <img
                // src={profile.photo || "/me.png"}
                src={profile.photo ||  `${BASE}me.jpeg`}
                alt="Portrait of Vandana Cendrollu Nagesh"
                className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-[20px]"
                decoding="async"
                fetchpriority="high"   
              />

              </div>
            </motion.div>

            
          </div>
        </div>
      </section>

      {/* Education section */}
      <section className="section bg-ink-50/60 dark:bg-white/5">
        <div className="container-base">
          <SectionHeader title="Education" subtitle="Degrees & coursework" />
          <div className="space-y-6">
            {profile.education.map((ed) => (
              <Reveal key={ed.school}>
                <EduItem
                  logo={eduLogos[ed.school]}
                  school={ed.school}
                  degree={ed.degree}
                  period={ed.period}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stacked skills */}
      <section className="section">
        <div className="container-base">
          <SectionHeader title="Skills" subtitle="Tools I use to build" />
          <div className="space-y-6">
            {Object.entries(profile.skills).map(([k, arr]) => (
              <Reveal key={k}>
                <div className="card">
                  <p className="h3 mb-3">{k}</p>
                  <SkillLogos
                    items={arr}
                    layout="inline"
                    nowrap           
                    showLabels
                    size={22}
                  />

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
