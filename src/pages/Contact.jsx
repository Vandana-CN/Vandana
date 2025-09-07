import { profile } from '../data/profile'
import SectionHeader from '../components/SectionHeader.jsx'
import { FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
  return (
    <section className="section">
      <div className="container-base">
        <SectionHeader title="Get in touch" subtitle="Open to internships, co-ops, and software roles" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card space-y-4">
            <p className="text-neutral-700 dark:text-white/80">{profile.contact_blurb}</p>
            <div className="flex flex-col gap-3">
              {profile.links.linkedin && (
                <a className="flex items-center gap-3 btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin size={20} color="#0A66C2" /> LinkedIn
                </a>
              )}
              {profile.links.github && (
                <a className="flex items-center gap-3 btn btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">
                  <FaGithub size={20} /> GitHub
                </a>
              )}
              {profile.contact.phone && (
                <div className="flex items-center gap-3 btn btn-ghost">
                  <FaPhoneAlt size={18} color="#10B981" /> {profile.contact.phone}
                </div>
              )}
               {profile.contact.email && (
                <a className="flex items-center gap-3 btn btn-ghost" href={`mailto:${profile.contact.email}`}>
                  <MdEmail size={20} color="#EA4335" /> {profile.contact.email}
                </a>
              )}
               
              
            </div>
          </div>

          <div className="card">
            <p className="mb-3 font-medium">Prefer a resume first?</p>
            {profile.links.resume ? (
              <a className="btn btn-primary" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">
                View Resume
              </a>
            ) : (
              <p className="text-sm text-neutral-600">Add your PDF at <code>/public/resume.pdf</code> to enable a resume button.</p>
            )}
            <p className="mt-4 text-sm text-neutral-600 dark:text-white/70">
              I usually respond within 24–48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
