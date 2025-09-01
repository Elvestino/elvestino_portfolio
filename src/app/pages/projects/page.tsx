"use client";
import { useState } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import { ProjectType } from "@/app/models/projectType";

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
    statusCompleted: true,
    description: "Projet Aurum cartel",
    technology: ["NextJS", "Socket.io", "TailwindCss"],
    nbrContribuate: 4,
    github: false,
    key: ["Authentification", "Gestion de messages"],
    type: "professionnal",
  },
];
const emit_project: ProjectType[] = [
  {
    title: "Projet EMIT",
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
    description: "Application de gestion des élèves au sein de l'EMIT",
    technology: ["AngularJS", "UUID", "Scss"],
    nbrContribuate: 1,
    github: "https://github.com/Elvestino/EmitProjet",
    key: [
      "Ajout d'un eleve",
      "Modification d'un eleve",
      "Suppresion d'un eleve",
    ],
    type: "academic",
  },
];
const biblio: ProjectType[] = [
  {
    title: "Biblio",
    description: "Gestion de bibliotheque",
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
    key: ["Gestion de retour", " Gestion d'Emprunt Livre", "Authentification"],
    type: "academic",
  },
];
const consultation: ProjectType[] = [
  {
    title: "Gestion de consultation",
    description:
      "Intégration de l'interface graphique du gestion de consultation au sein du CHU Tambohobe",
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
      "Ajout de patient",
      " Consultation du patient",
      "Archive du patient",
      "Ordonnance",
      "Arret de Travail",
      "Certificat Medical",
      "Archive Consultation",
      "Lettre d'orientation",
    ],
    type: "professionnal",
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
    type: "professionnal",
  },
];

const allProjects: ProjectType[] = [
  ...aurum,
  ...biblio,
  ...consultation,
  ...emit_project,
  ...portfolio,
];

// Catégories
const categories: { title: string; projects: ProjectType[] }[] = [
  {
    title: "All",
    projects: allProjects,
  },
  {
    title: "Completed",
    projects: allProjects.filter((p) => p.statusCompleted),
  },
  {
    title: "Professional Project",
    projects: allProjects.filter((p) => p.type === "professionnal"),
  },
  {
    title: "Academic Project",
    projects: allProjects.filter((p) => p.type === "academic"),
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("All");

  const currentCategory =
    categories.find((cat) => cat.title === activeTab) || categories[0];

  return (
    <div className="p-6 m-16">
      <div className="mx-auto p-6 mb-16 md:mb-6">
        <h2 className="text-4xl md:text-6xl text-center md:mb-6 mb-10">
          My <span className="text-[#7cf03d]">Projects</span>
        </h2>
        <p className="text-sm md:text-lg text-center">
          Here are some details of my completed projects
        </p>
      </div>

      {/* ---------------- Tabs ---------------- */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(cat.title)}
            className={`
              cursor-pointer rounded-md
              text-xs px-5 py-2            
              md:text-lg md:px-10 md:py-2  
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

      {/* ---------------- Grille des projets ---------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCategory.projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
