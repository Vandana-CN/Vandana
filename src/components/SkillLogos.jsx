import {
  SiOpenjdk, SiJavascript, SiCsharp, SiCplusplus, SiPython,
  SiSpringboot, SiNodedotjs, SiExpress, SiDotnet, SiApachekafka,
  SiReact, SiNextdotjs, SiAngular, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiJquery,
  SiMysql, SiPostgresql, SiMongodb, SiOracle, SiMicrosoftsqlserver,
  SiAmazonaws, SiDocker, SiKubernetes, SiAzuredevops, SiGit, SiJenkins, SiJira, SiVercel,
  SiOpenapiinitiative
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { motion } from "framer-motion";

const COLOR = {
  // Programming
  "Java": "#ED8B00", "JavaScript": "#F7DF1E", "C#": "#239120", "C++": "#00599C", "Python": "#3776AB",
  // Backend
  "Spring Boot": "#6DB33F", "Node.js": "#339933", "Express.js": "#000000", ".NET": "#512BD4", "ASP.NET": "#512BD4", "MVC": "#512BD4", "REST APIs": "#6E4C13", "Kafka": "#231F20",
  // Frontend
  "React": "#61DAFB", "Next.js": "#000000", "Angular": "#DD0031", "TypeScript": "#3178C6", "HTML5": "#E34F26", "CSS3": "#1572B6", "Tailwind CSS": "#06B6D4", "jQuery": "#0769AD",
  // Data
  "SQL": "#5E5E5E", "MySQL": "#4479A1", "MSSQL": "#CC2927", "Oracle": "#F80000", "PL/SQL": "#F80000", "MongoDB": "#47A248", "PostgreSQL": "#336791",
  // Cloud & DevOps
  "AWS": "#FF9900", "Docker": "#2496ED", "Kubernetes": "#326CE5", "Azure DevOps": "#0078D7", "Git": "#F05032", "Jenkins": "#D24939", "Jira": "#0052CC", "Vercel": "#000000",
};

const MAP = {
  // Programming
  "Java": SiOpenjdk, "JavaScript": SiJavascript, "C#": SiCsharp, "C++": SiCplusplus, "Python": SiPython,
  // Backend
  "Spring Boot": SiSpringboot, "Node.js": SiNodedotjs, "Express.js": SiExpress, ".NET": SiDotnet, "ASP.NET": SiDotnet, "MVC": SiDotnet, "REST APIs": SiOpenapiinitiative, "Kafka": SiApachekafka,
  // Frontend
  "React": SiReact, "Next.js": SiNextdotjs, "Angular": SiAngular, "TypeScript": SiTypescript, "HTML5": SiHtml5, "CSS3": SiCss3, "Tailwind CSS": SiTailwindcss, "jQuery": SiJquery,
  // Data
  "SQL": TbDatabase, "MySQL": SiMysql, "MSSQL": SiMicrosoftsqlserver, "Oracle": SiOracle, "PL/SQL": SiOracle, "MongoDB": SiMongodb, "PostgreSQL": SiPostgresql,
  // Cloud & DevOps
  "AWS": SiAmazonaws, "Docker": SiDocker, "Kubernetes": SiKubernetes, "Azure DevOps": SiAzuredevops, "Git": SiGit, "Jenkins": SiJenkins, "Jira": SiJira, "Vercel": SiVercel,
};

export default function SkillLogos({
  items,
  size = 28,
  showLabels = false,
  layout = "grid",          // "grid" | "stack" | "inline"
  gridCols = "grid-cols-3", // used when layout==="grid"
  nowrap = false,           // used when layout==="inline"
}) {
  const isGrid = layout === "grid";

  const containerClass = isGrid
    ? `grid ${gridCols} gap-4`
    : layout === "stack"
    ? "flex flex-col gap-3"
    : `flex ${nowrap ? "flex-nowrap overflow-x-auto" : "flex-wrap"} gap-3`;

  const tileClass = isGrid
    ? "h-14 w-full px-3 rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-white/5 flex items-center gap-3"
    : "h-12 w-auto px-3 rounded-xl border border-ink-100 dark:border-white/10 bg-white dark:bg-white/5 flex items-center gap-2";

  return (
    <div className={containerClass}>
      {items.map((label) => {
        const Icon = MAP[label];
        const color = COLOR[label] || undefined;
        if (!Icon) return <span key={label} className="badge">{label}</span>;

        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <div className={tileClass}>
              <Icon size={size} aria-label={label} className="shrink-0" color={color} />
              {(showLabels || layout === "stack") && (
                <span className="text-sm font-medium">{label}</span>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
