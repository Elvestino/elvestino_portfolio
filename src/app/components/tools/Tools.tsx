"use client";
import { useState } from "react";
import {
  FaTrello,
  FaWindows,
  FaLinux,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaChartBar,
  FaFileExcel,
} from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiPython, SiMysql, SiPostgresql, SiAdobexd } from "react-icons/si";

const devTools = [
  {
    title: "Visual Studio Code",
    description: "Mon éditeur de code principal",
    icon: TbBrandVscode,
  },
  {
    title: "Git",
    description: "Système de contrôle de version",
    icon: FaGitAlt,
  },
  {
    title: "GitHub",
    description: "Hébergement de code et collaboration",
    icon: FaGithub,
  },
  { title: "Docker", description: "Containerisation", icon: FaDocker },
];

const projectTools = [
  {
    title: "Trello",
    description: "Gestion de projet et tâches",
    icon: FaTrello,
  },
];

const designTools = [
  { title: "Figma", description: "Design UI/UX", icon: FaFigma },
  {
    title: "Adobe XD",
    description: "Design d'interfaces",
    icon: SiAdobexd,
  },
];

const dataTools = [
  { title: "Python", description: "Langage de programmation", icon: SiPython },

  {
    title: "MySQL",
    description: "Base de données relationnelle",
    icon: SiMysql,
  },
  {
    title: "PostgreSQL",
    description: "Base de données avancée",
    icon: SiPostgresql,
  },
  {
    title: "Power BI",
    description: "Outil de Business Intelligence",
    icon: FaChartBar,
  },
  {
    title: "Excel",
    description: "Analyse et reporting de données",
    icon: FaFileExcel,
  },
];

const osTools = [
  { title: "Windows", description: "Système d'exploitation", icon: FaWindows },
  {
    title: "Linux",
    description: "Système d'exploitation open-source",
    icon: FaLinux,
  },
];

const categories = [
  {
    title: "All",
    tools: [
      ...devTools,
      ...projectTools,
      ...designTools,
      ...dataTools,
      ...osTools,
    ],
  },
  { title: "Web Development", tools: devTools },
  { title: "Project management", tools: projectTools },
  { title: "Design", tools: designTools },
  { title: "Data & BI", tools: dataTools },
  { title: "Exploitation System", tools: osTools },
];

export default function Tools() {
  const [activeTab, setActiveTab] = useState("All");
  const currentCategory =
    categories.find((cat) => cat.title === activeTab) || categories[0];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">
        My <span className="text-[#7cf03d]">Tools</span>
      </h2>

      {/* ---------------- Tabs en grille 2 par ligne sur mobile ---------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-8 ">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(cat.title)}
            className={`
    cursor-pointer rounded-md
    text-xs px-2 py-1            
    md:text-lg md:px-3 md:py-2  
    data-[state=active]:text-[#7cf03d] 
    hover:border-[#7cf03d] duration-500 
    hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]
    ${
      activeTab === cat.title
        ? "bg-[#7cf03d] text-[#101828]"
        : "bg-[#22222c] text-white hover:bg-[#7cf03d]"
    }
  `}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* ---------------- Grille responsive ---------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {currentCategory.tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div
              key={index}
              className="bg-[#22222c] text-white rounded-xl p-4 sm:p-6 shadow-lg
               transition-all duration-300 transform
               hover:scale-105 hover:-translate-y-2 hover:shadow-[#7cf03d]/50"
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Icon className="text-[#7cf03d] text-2xl sm:text-3xl" />
                <h4 className="text-sm sm:text-xl font-semibold text-[#7cf03d]">
                  {tool.title}
                </h4>
              </div>
              <p className="text-[10px] sm:text-sm text-gray-400">
                {tool.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
