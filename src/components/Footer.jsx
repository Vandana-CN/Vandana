import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container-base py-10 text-sm text-neutral-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {profile.contact.email && <a className="link" href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>}
            {profile.contact.phone && <span>{profile.contact.phone}</span>}
          </div>
        </div>
      </div>
    </footer>
  )
}
