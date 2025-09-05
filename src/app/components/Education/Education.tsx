"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "First year of Master's degree",
    school:
      "School of Management and Technological Innovation (EMIT - Fianrantsoa)",
    description: "2025 - Present",
    icon: FaGraduationCap,
  },

  {
    title: "Third year of Bachelor's degree",
    school:
      "School of Management and Technological Innovation (EMIT - Fianrantsoa)",
    description: "2023 - 2024",
    icon: FaGraduationCap,
  },

  {
    title: "Second year of Bachelor's degree",
    school:
      "School of Management and Technological Innovation (EMIT - Fianarantsoa)",
    description: "2022 - 2023",
    icon: FaGraduationCap,
  },

  {
    title: "First year of Bachelor's degree",
    school:
      "School of Management and Technological Innovation (EMIT - Fianarantsoa)",
    description: "2021 - 2022",
    icon: FaGraduationCap,
  },
  {
    title: "Baccalaureate - Series D",
    school: "Lycée Saint Joseph de Cluny (SJC - Fianarantsoa)",
    description: "2019 - 2020",
    icon: FaGraduationCap,
  },
];

export default function Education() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === educationData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? educationData.length - 1 : prev - 1
    );
  };

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 max-md:mx-5">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        My <span className="text-[#7cf03d]">Education</span>
      </h2>

      {/* Desktop / Tablet Grid */}
      <div className="hidden sm:grid max-w-6xl mx-auto grid-cols-2 lg:grid-cols-3 gap-6">
        {educationData.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <div
              key={index}
              className="bg-[#22222c] text-white rounded-xl p-6 shadow-lg
               transition-all duration-300 transform
             hover:scale-105 hover:-translate-y-2 hover:shadow-[#7cf03d]/50"
            >
              <div className="flex justify-center items-center gap-2 mb-4">
                <Icon className="text-[#7cf03d] text-5xl" />
                <h3 className="text-xl font-semibold mb-2 text-[#7cf03d]">
                  {edu.title}
                </h3>
              </div>
              {edu.school && (
                <p className="text-gray-400 font-bold mb-2">{edu.school}</p>
              )}
              <p className="text-base font-medium ">
                {" "}
                <span className="text-[#7cf03d]">Years :</span>{" "}
                {edu.description}
              </p>
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

        <div className="overflow-hidden ">
          <div
            className="flex transition-transform duration-300 gap-4"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 max-md:w-[95%] mx-auto bg-[#22222c] text-white rounded-xl p-6 shadow-lg "
                >
                  <div className="flex items-center justify-center gap-2">
                    <Icon className="text-[#7cf03d] text-5xl" />
                    <h3 className="text-xl font-semibold mb-2 text-[#7cf03d]">
                      {edu.title}
                    </h3>
                  </div>
                  {edu.school && (
                    <p className="text-gray-400 font-bold mb-2">{edu.school}</p>
                  )}
                  <p className="text-base font-medium">
                    <span className="italic text-[#7cf03d]"> Years :</span>{" "}
                    {edu.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots cliquables */}
        <div className="flex justify-center mt-4 gap-2">
          {educationData.map((_, index) => (
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
