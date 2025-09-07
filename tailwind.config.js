/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",
          400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",
          800:"#3730a3",900:"#312e81" },
        accent: { 500:"#06b6d4", 600:"#0891b2" },
        ink: { 50:"#f9fafb", 100:"#f3f4f6", 600:"#475569", 800:"#1f2937", 900:"#0b1220" }
      },
      boxShadow:{ soft:"0 12px 30px rgba(2,6,23,0.08)" },
      borderRadius:{ xl:"1rem","2xl":"1.25rem" }
    }
  },
  plugins: [],
}
