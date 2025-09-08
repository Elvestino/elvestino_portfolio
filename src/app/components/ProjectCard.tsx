"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/app/components/ui/card";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaGithub, FaUsers } from "react-icons/fa";
import { ProjectType } from "../models/projectType";
import { CheckCircle, Clock } from "lucide-react";

export default function ProjectCard({ project }: { project: ProjectType }) {
  const [currentImage, setCurrentImage] = useState(0);

  // slider auto
  useEffect(() => {
    const total = project.images.length;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <Card className="overflow-hidden rounded shadow-lg bg-[#22222c] md:hover:bg-[#101828] transition-all md:hover:scale-105 md:hover:-translate-y-2 md:hover:shadow-[0_0_10px_#7cf03d] duration-500">
      {/* Image slider */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
        <div
          className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {project.images.map((img, i) => (
            <div key={i} className="relative w-full h-full flex-shrink-0">
              <Image
                src={img}
                alt={`${project.title} image ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bullets */}
      <div className="flex justify-center gap-2 mt-2">
        {project.images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              currentImage === i ? "bg-[#7cf03d]" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Texte */}
      <CardHeader className="px-3 sm:px-4 pt-2 text-[#7cf03d]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
          {/* Titre */}
          <CardTitle className="text-lg sm:text-xl md:text-2xl">
            {project.title}
          </CardTitle>

          {/* Status + Github */}
          <div className="flex flex-wrap justify-start gap-3 items-center">
            {/* Status */}
            <div className="relative flex items-center gap-2 group">
              {/* Cercle coloré */}
              <span
                className={`w-3 h-3 rounded-full ${
                  project.statusCompleted ? "bg-green-500" : "bg-yellow-500"
                }`}
              ></span>

              {/* Icône */}
              {project.statusCompleted ? (
                <CheckCircle className="text-green-500 w-4 h-4" />
              ) : (
                <Clock className="text-yellow-500 w-4 h-4" />
              )}

              {/* Tooltip */}
              <span className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs rounded bg-gray-800 text-white whitespace-nowrap shadow-lg">
                {project.statusCompleted ? "Completed" : "In progress"}
              </span>
            </div>

            {/* Github */}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group border border-gray-600 px-2 py-1 rounded hover:border-[#7cf03d] transition duration-300"
              >
                <FaGithub className="text-white text-lg sm:text-xl transition-transform duration-300 group-hover:scale-125 group-hover:text-[#7cf03d]" />
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-[#7cf03d]">
                  Disponible
                </span>
              </a>
            ) : (
              <button
                disabled
                className="flex items-center gap-2 border border-gray-600 px-2 py-1 rounded opacity-50 cursor-not-allowed"
              >
                <FaGithub className="text-gray-500 text-lg sm:text-xl" />
                <span className="text-xs sm:text-sm text-gray-400 font-bold">
                  Confidentiel
                </span>
              </button>
            )}
          </div>
        </div>

        {/* description */}
        <p className="text-sm sm:text-base text-gray-400 my-2">
          {project.description}
        </p>

        {/* Mois / Année / Contributeurs */}
        <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-300 mb-2">
          <span className="text-[#7cf03d] flex items-center gap-1">
            <AiOutlineCalendar />
            {project.month} <span className="text-gray-400">Mois</span>
          </span>
          <span className="text-[#7cf03d] flex items-center gap-1">
            <span className="text-gray-400">Année :</span> {project.year}
          </span>
          <span className="text-[#7cf03d] flex items-center gap-1">
            <FaUsers />
            {project.nbrContribuate}{" "}
            <span className="text-gray-400">developpeur</span>
          </span>
        </div>

        {/* Fonctionnalités */}
        <div className="mb-2">
          <h4 className="text-sm font-semibold text-white">
            Fonctionnalités clé :
          </h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.key.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded bg-[#1f242d] border border-[#7cf03d]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-2">
          <h4 className="text-sm font-semibold text-white">
            Technologies utilisées :
          </h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.technology.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded bg-[#1f242d] border border-[#7cf03d]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
