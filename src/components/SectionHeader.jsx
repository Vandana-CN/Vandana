export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <div className="h-1 w-12 rounded-full bg-accent-500 mb-3"></div>
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="text-ink-600 dark:text-white/70 mt-1">{subtitle}</p>}
    </div>
  )
}
