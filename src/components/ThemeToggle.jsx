import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
  if (typeof window === "undefined") return false;     
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";                
  return false;                                        // default: light
});


  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      className="badge hover:bg-ink-100/60 dark:hover:bg-white/10"
      onClick={() => setDark(v => !v)}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
