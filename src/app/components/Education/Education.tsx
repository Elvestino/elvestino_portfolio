"use client";
import { FaGraduationCap } from "react-icons/fa";
import Carousel from "../Carousel";

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
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 max-md:mx-5">
      <h2 className="w-full text-4xl font-bold text-center mb-5 max-md:text-3xl">
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
      <div className="sm:hidden max-w-md mx-auto relative max-md:mx-4">
        <Carousel
          items={educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-[94%] mx-auto bg-[#22222c] text-white rounded-xl p-6 shadow-lg "
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
        />
      </div>
    </section>
  );
}
