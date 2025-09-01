"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };
  const experiences = [
    {
      title: "Développeur Frontend",
      company: "XYZ",
      year: "2022 - Présent",
      description:
        "Développement d’interfaces modernes et optimisées pour l’expérience utilisateur.",
    },
    {
      title: "Stage Data Analyst",
      company: "ABC",
      year: "2021",
      description:
        "Analyse de données et création de rapports interactifs avec Power BI.",
    },
    {
      title: "Bénévole IT",
      company: "Association Jeunes Devs",
      year: "2020",
      description:
        "Support technique et organisation d’ateliers pour jeunes développeurs.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#7cf03d]">
        My <span className="text-white">Experience</span>
      </h2>
      {/* Desktop / Tablet Grid */}
      <div className="hidden sm:grid max-w-6xl mx-auto grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((edu, index) => {
          return (
            <div
              key={index}
              className="bg-[#22222c] text-white rounded-xl p-6 shadow-lg
               transition-all duration-300 transform
             hover:scale-105 hover:-translate-y-2 hover:shadow-[#7cf03d]/50"
            >
              <div className="flex justify-center items-center gap-2 mb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#7cf03d]">
                  {edu.title}
                </h3>
              </div>
              {edu.description && (
                <p className="text-gray-400 font-bold mb-2">
                  {edu.description}
                </p>
              )}
              <p className="text-base font-medium">Years : {edu.year}</p>
            </div>
          );
        })}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden max-w-md mx-auto relative">
        {/* Flèches à l'extérieur */}
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
            {experiences.map((edu, index) => {
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-[94%] mx-auto bg-[#22222c] text-white rounded-xl p-6 shadow-lg "
                >
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-xl font-semibold mb-2 text-[#7cf03d]">
                      {edu.title}
                    </h3>
                  </div>
                  {edu.description && (
                    <p className="text-gray-400 font-bold mb-2">
                      {edu.description}
                    </p>
                  )}
                  <p className="text-base font-medium">
                    <span className="italic"> Years :</span> {edu.year}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots cliquables */}
        <div className="flex justify-center mt-4 gap-2">
          {experiences.map((_, index) => (
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
    </section>
  );
}
