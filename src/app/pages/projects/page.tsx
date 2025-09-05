"use client";
import { ReactNode, useState } from "react";
import ProjectCard from "@/app/components/ProjectCard";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ProjectType } from "@/app/models/projectType";
import { Layers, CheckCircle, Briefcase, BookOpen } from "lucide-react";

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
    technology: ["AngularJS", "UUID", "Scss", "SweetAlert2"],
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
    description: "Projet pour le concours pour la l'hymne de l'EMIT",
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
      "Authentification",
      "Gestion d'utilisateur",
      "Compte a rebour",
      "Ajout d'administrateur",
      "Affichage moyenne des participants",
    ],
    type: "professionnal",
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
    projects: allProjects.filter((p) => p.type === "professionnal"),
    icon: <Briefcase />,
  },
  {
    title: "Academic Project",
    projects: allProjects.filter((p) => p.type === "academic"),
    icon: <BookOpen />,
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === currentCategory.projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentCategory.projects.length - 1 : prev - 1
    );
  };

  const currentCategory =
    categories.find((cat) => cat.title === activeTab) || categories[0];

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8 max-md:mx-5 max-md:my-8">
      <div className="mx-auto p-6 mb-5 md:mb-6">
        <h2 className="text-4xl md:text-6xl text-center md:mb-6 mb-5">
          My <span className="text-[#7cf03d]">Projects</span>
        </h2>
        <p className="text-sm md:text-lg text-center">
          Here are some details of my completed projects
        </p>
      </div>

      {/* ---------------- Tabs ---------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-8 max-md:grid max-md:grid-cols-2 max-md:gap-4">
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
            {" "}
            {/* Icône */}
            <span className="w-4 h-4 md:w-5 md:h-5">{cat.icon}</span>
            {/* Titre */}
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* ---------------- Grille des projets version normal ---------------- */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-md:">
        {currentCategory.projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {/*Grille des projets version Mobile Carousel */}
      <div className="sm:hidden max-w-md mx-auto relative max-md:mx-4">
        {/* Flèches */}
        <button
          onClick={prevSlide}
          className="absolute left-[-45px] top-1/2 -translate-y-1/2 text-[#7cf03d] text-3xl p-1 cursor-pointer border border-[#7cf03d] rounded-full hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] duration-500"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[-45px] top-1/2 -translate-y-1/2 text-[#7cf03d] text-3xl p-1 cursor-pointer border border-[#7cf03d] rounded-full hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] duration-500"
        >
          <IoIosArrowForward />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 gap-4"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {currentCategory.projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 max-md:w-[96%] mx-auto">
                <ProjectCard key={index} project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {currentCategory.projects.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                index === currentIndex ? "bg-[#7cf03d]" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
