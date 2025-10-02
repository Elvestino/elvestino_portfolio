"use client";
import { ReactNode, useState } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import { ProjectType } from "@/app/models/projectType";
import { Layers, CheckCircle, Briefcase, BookOpen } from "lucide-react";
import Carousel from "@/app/components/Carousel";

// Exemple de données
const aurum: ProjectType[] = [
  {
    title: "Aurum Cartel",
    images: [
      "/assets/img/Aurum/Aurum1.png",
      "/assets/img/Aurum/Aurum2.png",
      "/assets/img/Aurum/Aurum3.png",
      "/assets/img/Aurum/Aurum4.png",
    ],
    year: 2025,
    month: 6,
    statusCompleted: false,
    description: "Aurum Cartel Project",
    technology: ["NextJS", "Socket.io", "TailwindCss"],
    nbrContribuate: 4,
    github: false,
    key: ["Authentication", "Message management"],
    type: "professional",
  },
];
const emit_project: ProjectType[] = [
  {
    title: "EMIT Project",
    images: [
      "/assets/img/projet_emit/emit1.png",
      "/assets/img/projet_emit/emit2.png",
      "/assets/img/projet_emit/emit3.png",
      "/assets/img/projet_emit/emit4.png",
      "/assets/img/projet_emit/emit5.png",
    ],
    year: 2025,
    month: 1,
    statusCompleted: true,
    description: "Student management application within EMIT",
    technology: ["AngularJS", "UUID", "Scss", "SweetAlert2"],
    nbrContribuate: 1,
    github: "https://github.com/Elvestino/EmitProject",
    key: ["Adding a student", "Modifying a student", "Deleting a student"],
    type: "academic",
  },
];
const biblio: ProjectType[] = [
  {
    title: "Biblio",
    description: "Library Management",
    images: [
      "/assets/img/biblio_angular/biblio1.png",
      "/assets/img/biblio_angular/biblio2.png",
      "/assets/img/biblio_angular/biblio3.png",
      "/assets/img/biblio_angular/biblio4.png",
      "/assets/img/biblio_angular/biblio5.png",
      "/assets/img/biblio_angular/biblio6.png",
      "/assets/img/biblio_angular/biblio7.png",
      "/assets/img/biblio_angular/biblio8.png",
      "/assets/img/biblio_angular/biblio9.png",
      "/assets/img/biblio_angular/biblio10.png",
      "/assets/img/biblio_angular/biblio11.png",
      "/assets/img/biblio_angular/biblio12.png",
    ],
    year: 2024,
    month: 2,
    statusCompleted: true,
    nbrContribuate: 1,
    technology: ["AngularJs", "Scss"],
    github: "https://github.com/Elvestino/biblio-frontend",
    key: ["Return Management", "Book Borrowing Management", "Authentication"],
    type: "academic",
  },
];
const consultation: ProjectType[] = [
  {
    title: "Consultation Management",
    description:
      "Integration of the Consultation Management GUI within Tambohobe University Hospital",
    images: [
      "/assets/img/consultation/consultation1.png",
      "/assets/img/consultation/consultation2.png",
      "/assets/img/consultation/consultation3.png",
      "/assets/img/consultation/consultation4.png",
      "/assets/img/consultation/consultation5.png",
      "/assets/img/consultation/consultation6.png",
      "/assets/img/consultation/consultation7.png",
      "/assets/img/consultation/consultation8.png",
      "/assets/img/consultation/consultation9.png",
      "/assets/img/consultation/consultation10.png",
      "/assets/img/consultation/consultation11.png",
      "/assets/img/consultation/consultation12.png",
      "/assets/img/consultation/consultation13.png",
      "/assets/img/consultation/consultation14.png",
      "/assets/img/consultation/consultation15.png",
      "/assets/img/consultation/consultation16.png",
      "/assets/img/consultation/consultation17.png",
      "/assets/img/consultation/consultation18.png",
      "/assets/img/consultation/consultation19.png",
      "/assets/img/consultation/consultation20.png",
      "/assets/img/consultation/consultation21.png",
      "/assets/img/consultation/consultation22.png",
    ],
    year: 2024,
    month: 3,
    statusCompleted: true,
    nbrContribuate: 1,
    technology: ["NextJS", "TailwindCss", "SweetAlert2", "Json-Server"],
    github: false,
    key: [
      "Add Patient",
      "Patient Consultation",
      "Patient Archive",
      "Prescription",
      "Sick Leave",
      "Medical Certificate",
      "Consultation Archive",
      "Referral Letter",
    ],
    type: "professional",
  },
];
const portfolio: ProjectType[] = [
  {
    title: "Portfolio",
    images: ["/assets/img/portfolio/portfolio.png"],
    year: 2025,
    month: 1,
    statusCompleted: true,
    description: "Portfolio Elvestino",
    technology: [
      "NextJS",
      "Shadcn",
      "TailwindCss",
      "React-icons",
      "Framer-Motion",
      "Netlify",
    ],
    nbrContribuate: 1,
    github: false,

    key: ["Responsive Design", "Animation", "SEO"],
    type: "professional",
  },
];
const hymne: ProjectType[] = [
  {
    title: "Hymne EMIT",
    images: [
      "/assets/img/emit_chant/hymne1.png",
      "/assets/img/emit_chant/hymne2.png",
      "/assets/img/emit_chant/hymne3.png",
    ],
    year: 2025,
    month: 6,
    statusCompleted: true,
    description: "Project for the EMIT anthem competition",
    technology: [
      "NextJS",
      "Socket.io",
      "TailwindCss",
      "ExpressJS",
      "PostgreSQL",
      "ChartJS",
      "React-Icons",
      "Framer-Motion",
      "SweetAlert2",
    ],
    nbrContribuate: 2,
    github: false,
    key: [
      "Authentication",
      "User Management",
      "Countdown",
      "Add Administrator",
      "Average Attendee Display",
    ],
    type: "professional",
  },
];

const allProjects: ProjectType[] = [
  ...portfolio,
  ...hymne,
  ...aurum,
  ...biblio,
  ...consultation,
  ...emit_project,
];

// Catégories
const categories: {
  title: string;
  projects: ProjectType[];
  icon: ReactNode;
}[] = [
  {
    title: "All",
    projects: allProjects,
    icon: <Layers />,
  },
  {
    title: "Completed",
    projects: allProjects.filter((p) => p.statusCompleted),
    icon: <CheckCircle />,
  },
  {
    title: "Professional Project",
    projects: allProjects.filter((p) => p.type === "professional"),
    icon: <Briefcase />,
  },
  {
    title: "Academic Project",
    projects: allProjects.filter((p) => p.type === "academic"),
    icon: <BookOpen />,
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const currentCategory =
    categories.find((cat) => cat.title === activeTab) || categories[0];

  return (
    <div className="px-4 sm:px-6 lg:px-12  max-md:mx-5 max-md:my-3 max-w-[1144px]">
      <div className="mx-auto p-6 mb-5 md:mb-6">
        <h2 className="w-full text-5xl font-bold text-center mb-5 max-md:text-3xl">
          My <span className="text-[#7cf03d]">Projects</span>
        </h2>
        <p className="text-sm md:text-lg text-center">
          Here are some details of my completed projects
        </p>
      </div>

      {/* ---------------- Tabs ---------------- */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 max-md:gap-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(cat.title)}
            className={`
        flex items-center justify-center gap-2 max-md:gap-3 max-md:px-3 max-md:py-3
        rounded-md cursor-pointer
        text-xs md:text-lg font-medium
        px-2 py-1 md:px-3 md:py-2
        duration-500 ${
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

      {/* ---------------- Grille des projets version normal ---------------- */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-32">
        {currentCategory.projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {/*Grille des projets version Mobile Carousel */}
      <div className="sm:hidden max-w-md mx-auto relative max-md:mx-4">
        <Carousel
          items={currentCategory.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        />
      </div>
    </div>
  );
}
