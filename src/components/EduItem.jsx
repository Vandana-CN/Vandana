export default function EduItem({ logo, school, degree, period }) {
  return (
    <div className="card flex items-center gap-4">
      {logo && (
  <div
    className="
      w-[72px] h-[72px]
      rounded-lg overflow-hidden            
      bg-white dark:bg-transparent          
      border border-ink-100/60 dark:border-transparent
      shadow-soft dark:shadow-none
      flex items-center justify-center
    "
  >
    <img src={logo} alt={school} className="w-full h-full object-contain" />
  </div>
)}
      <div className="flex-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="h3">{school}</h3>
          <span className="text-sm text-ink-600 dark:text-white/60">{period}</span>
        </div>
        <p className="mt-1 font-medium">{degree}</p>
      </div>
    </div>
  )
}
