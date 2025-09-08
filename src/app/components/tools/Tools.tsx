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
import {
  LayoutGrid,
  Code2,
  ClipboardList,
  Palette,
  BarChart3,
  Monitor,
} from "lucide-react";

const devTools = [
  {
    title: "Visual Studio Code",
    description: "My main code editor",
    icon: TbBrandVscode,
  },
  {
    title: "Git",
    description: "Version control system",
    icon: FaGitAlt,
  },
  {
    title: "GitHub",
    description: "Code hosting and collaboration",
    icon: FaGithub,
  },
  { title: "Docker", description: "Containerization", icon: FaDocker },
];

const projectTools = [
  {
    title: "Trello",
    description: "Project and task management",
    icon: FaTrello,
  },
];

const designTools = [
  { title: "Figma", description: "Design UI/UX", icon: FaFigma },
  {
    title: "Adobe XD",
    description: "Interface design",
    icon: SiAdobexd,
  },
];

const dataTools = [
  { title: "Python", description: "Programming Language", icon: SiPython },

  {
    title: "MySQL",
    description: "Relational Database",
    icon: SiMysql,
  },
  {
    title: "PostgreSQL",
    description: "Advanced Database",
    icon: SiPostgresql,
  },
  {
    title: "Power BI",
    description: "Business Intelligence Tool",
    icon: FaChartBar,
  },
  {
    title: "Excel",
    description: "Data Analysis and Reporting",
    icon: FaFileExcel,
  },
];

const osTools = [
  { title: "Windows", description: "Operating System", icon: FaWindows },
  {
    title: "Linux",
    description: "Open-source Operating System",
    icon: FaLinux,
  },
];

const categories = [
  {
    title: "All",
    icon: <LayoutGrid className="w-5 h-5" />,
    tools: [
      ...devTools,
      ...projectTools,
      ...designTools,
      ...dataTools,
      ...osTools,
    ],
  },
  {
    title: "Web Development",
    icon: <Code2 className="w-5 h-5" />,
    tools: devTools,
  },
  {
    title: "Project management",
    icon: <ClipboardList className="w-5 h-5" />,
    tools: projectTools,
  },
  {
    title: "Design",
    icon: <Palette className="w-5 h-5" />,
    tools: designTools,
  },
  {
    title: "Data & BI",
    icon: <BarChart3 className="w-5 h-5" />,
    tools: dataTools,
  },
  {
    title: "Exploitation System",
    icon: <Monitor className="w-5 h-5" />,
    tools: osTools,
  },
];

export default function Tools() {
  const [activeTab, setActiveTab] = useState("All");
  const currentCategory =
    categories.find((cat) => cat.title === activeTab) || categories[0];

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 max-md:mx-5">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">
        My <span className="text-[#7cf03d]">Tools</span>
      </h2>

      {/* ---------------- Tabs en grille 2 par ligne sur mobile ---------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-8 max-md:grid max-md:grid-cols-2 max-md:gap-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(cat.title)}
            className={`
        flex items-center justify-center gap-2 max-md:gap-3 max-md:px-3 max-md:py-2
        rounded-md cursor-pointer
        text-xs md:text-lg font-medium
        px-2 py-1 md:px-3 md:py-2
        duration-500
        ${
          activeTab === cat.title
            ? "bg-[#7cf03d] text-[#101828] shadow-[0_0_10px_#7cf03d]"
            : "bg-[#22222c] text-white hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]"
        }
      `}
          >
            {/* Icône */}
            <span className="w-4 h-4 md:w-5 md:h-5">{cat.icon}</span>
            {/* Titre */}
            <span>{cat.title}</span>
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
              className="group bg-[#22222c] text-white rounded-xl p-4 sm:p-6 shadow-lg
                   transition-all duration-300 transform
                   hover:scale-105 hover:-translate-y-2 hover:shadow-[#7cf03d]/50"
            >
              {/* Header : Icône + Titre */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Icon className="w-9 h-7 sm:w-8 sm:h-8 text-[#7cf03d]" />
                <h4
                  className="text-sm sm:text-xl font-semibold text-[#7cf03d] 
                       group-hover:text-[#a6f77d] transition-colors duration-300"
                >
                  {tool.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-[10px] sm:text-sm text-gray-400 leading-relaxed">
                {tool.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
