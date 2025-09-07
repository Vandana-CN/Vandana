import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'
import ThemeToggle from './ThemeToggle'
import { motion } from 'framer-motion'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
]
const mobileNav = nav.filter(i =>
  ['/', '/experience', '/projects', '/contact'].includes(i.to)
);


export default function Navbar() {
  return (
    <header className="border-b border-ink-100/70 dark:border-white/10 bg-white/80 dark:bg-[#0b1020]/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
      <div className="container-base flex items-center justify-between h-16">
        <motion.a href="#/" className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500" initial={{opacity:0, y:-8}} animate={{opacity:1, y:0}} transition={{duration:.35}}>
          {profile.name}
        </motion.a>
        <nav className="hidden md:flex gap-6">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-brand-700 dark:text-brand-400 font-semibold' : 'text-ink-600 hover:text-ink-900 dark:text-white/70 dark:hover:text-white'}`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {profile.links.resume && (
          <a
            href={`${BASE}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary !h-10 !px-4 shadow-soft hover:-translate-y-0.5"

          >
            Resume
          </a>
        )}
          <ThemeToggle />
        </div>
      </div>


    


    {/* MOBILE NAV */}
          <nav className="md:hidden border-t border-ink-100/60 dark:border-white/10">
            <div className="container-base py-2">
              <ul className="grid grid-cols-4 gap-2 w-full">
                {mobileNav.map((item) => (
                  <li key={item.to} className="min-w-0">
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `!block !w-full text-center text-sm rounded-xl py-2 ${
                          isActive
                            ? 'bg-brand-600 text-white'
                            : 'bg-ink-50 text-ink-800 border border-ink-100 hover:bg-ink-100 dark:bg-white/10 dark:text-white/80 dark:border-white/10 dark:hover:bg-white/15'
                        }`
                      }
                    >
                      <span className="truncate">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>



    </header>
  )
}
