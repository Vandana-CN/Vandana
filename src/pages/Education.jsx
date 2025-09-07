import { profile } from '../data/profile'
import SectionHeader from '../components/SectionHeader.jsx'
import EduItem from '../components/EduItem.jsx'


export default function Education() {
  const BASE = import.meta.env.BASE_URL;
  const logos = {
      "University of Florida, USA": `${BASE}logos/UF.jpg`,
      "Vellore Institute of Technology – AP, India": `${BASE}logos/VIT.png`,
  };
  return (
    <section className="section">
      <div className="container-base">
        <SectionHeader title="Education" subtitle="Degrees & coursework" />
        <div className="space-y-6">
          {profile.education.map((ed) => (
            <EduItem
              key={ed.school}
              logo={logos[ed.school]}
              school={ed.school}
              degree={ed.degree}
              period={ed.period}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
