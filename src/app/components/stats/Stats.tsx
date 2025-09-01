"use client";
import CountUp from "react-countup";

export default function Stats() {
  const exp = [
    { num: 1, text: "Years of experience" },
    { num: 8, text: "Technology mastered" },
    { num: 3, text: "Finish Project" },
    { num: 300, text: "Code commit" },
  ];

  return (
    <section className="pt-6 pb-12 w-full ">
      <div className="container mx-auto px-4">
        {/* Responsive grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
          {exp.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              {/* Numéro */}
              <CountUp
                end={item.num}
                duration={3}
                delay={0.5}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7cf03d]"
              />
              {/* Texte */}
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
