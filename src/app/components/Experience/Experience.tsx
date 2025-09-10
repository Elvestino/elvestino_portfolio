"use client";
import Carousel from "../Carousel";

export default function Experience() {
  const experiences = [
    {
      title: "Data Analyst Training",
      company: "IDEA Academy",
      year: "2025",
      description: "Data analysis and interactive reporting with Power BI.",
    },
    {
      title: "Front-End Developer Internship",
      company:
        "School of Management and Technological Innovation (EMIT - Fianarantsoa)",
      year: "2024",
      description:
        "Integration of the consultation management graphical interface within the Tambohobe University Hospital, Fianarantsoa",
    },
    {
      title: "Java Developer Internship",
      company: "Regional Budget Service (SRB - Ihorombe)",
      year: "2023",
      description:
        "Design and implementation of material accounting management within the SRB, Ihorombe",
    },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 max-md:mx-5">
      <h2 className="w-full text-4xl font-bold text-center mb-5 max-md:text-3xl">
        My <span className="text-[#7cf03d]">Experience</span>
      </h2>
      {/* Desktop / Tablet Grid */}
      <div className="hidden sm:grid max-w-6xl mx-auto grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => {
          return (
            <div
              key={index}
              className="bg-[#22222c] text-white rounded-xl p-6 shadow-lg
               transition-all duration-300 transform
             hover:scale-105 hover:-translate-y-2 hover:shadow-[#7cf03d]/50"
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#7cf03d]">
                  {exp.title}
                </h3>
                <p className="text-gray-400 text-center">{exp.company}</p>
              </div>
              {exp.description && (
                <p className="text-gray-400 font-bold mb-2 text-justify">
                  {exp.description}
                </p>
              )}
              <p className="text-base font-medium">
                <span className="italic text-[#7cf03d]">Years :</span>{" "}
                {exp.year}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden max-w-md mx-auto relative max-md:mx-4">
        <Carousel
          items={experiences.map((exp, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[94%] mx-auto bg-[#22222c] text-white rounded-xl p-6 shadow-lg "
            >
              <div className="text-center mb-2">
                <h3 className="text-xl font-semibold mb-2 text-[#7cf03d]">
                  {exp.title}
                </h3>
                <p className="text-gray-400 text-xs text-center">
                  {exp.company}
                </p>
              </div>
              {exp.description && (
                <p className="text-gray-400 text-[15px] font-bold mb-2">
                  {exp.description}
                </p>
              )}
              <p className="text-base font-medium">
                <span className="italic text-[#7cf03d]"> Years :</span>{" "}
                {exp.year}
              </p>
            </div>
          ))}
        />
      </div>
    </section>
  );
}
