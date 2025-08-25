"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const educationData = [
  {
    title: "First year of Master's degree",
    school:
      "School of Management and Technological Innovation (EMIT - Fianrantsoa)",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quam iusto aut saepe tempora dicta.",
  },
  {
    title: "Professional internship at EMIT",
    school: "",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quam iusto aut saepe tempora dicta.",
  },
  {
    title: "Third year of Bachelor's degree",
    school:
      "School of Management and Technological Innovation (EMIT - Fianrantsoa)",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quam iusto aut saepe tempora dicta.",
  },
  {
    title: "Professional internship at SRB Ihorombe",
    school: "",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quam iusto aut saepe tempora dicta.",
  },
  {
    title: "Second year of Bachelor's degree",
    school:
      "School of Management and Technological Innovation (EMIT - Fianrantsoa)",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quam iusto aut saepe tempora dicta.",
  },
  {
    title: "Test",
    school: "",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quam iusto aut saepe tempora dicta.",
  },
  {
    title: "First year of Bachelor's degree",
    school:
      "School of Management and Technological Innovation (EMIT - Fianrantsoa)",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quam iusto aut saepe tempora dicta.",
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
    <section className="education py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        My <span className="text-[#7cf03d]">Education</span>
      </h2>

      {/* Desktop / Tablet Grid */}
      <div className="hidden sm:grid max-w-6xl mx-auto grid-cols-2 lg:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#22222c] text-white rounded-xl p-6 shadow-lg
             transition-all duration-300 transform
             hover:scale-105 hover:-translate-y-2 hover:shadow-[#7cf03d]/50"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#7cf03d]">
              {edu.title}
            </h3>
            {edu.school && (
              <p className="text-gray-400 font-bold mb-2">{edu.school}</p>
            )}
            <p className="text-base font-medium">{edu.description}</p>
          </div>
        ))}
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
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[94%] mx-auto bg-[#22222c] text-white rounded-xl p-6 shadow-lg "
              >
                <h3 className="text-xl font-semibold mb-2 text-[#7cf03d]">
                  {edu.title}
                </h3>
                {edu.school && (
                  <p className="text-gray-400 font-bold mb-2">{edu.school}</p>
                )}
                <p className="text-base font-medium">{edu.description}</p>
              </div>
            ))}
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
