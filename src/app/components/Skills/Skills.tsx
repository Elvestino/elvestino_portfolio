"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SkillModal from "./SkillModal";
import Figma from "./components/Figma";
import ReactJS from "./components/ReactJs";
import Next from "./components/NextJS";
import Python from "./components/Python";
import TailwindCSS from "./components/Tailwind";
import NodeJS from "./components/Node";
import { FaGamepad, FaFilm, FaMusic, FaBasketballBall } from "react-icons/fa";

// Déclarer les interests
const interests = [
  { title: "Video Games", icon: FaGamepad },
  { title: "Japanese Animation & Cinema", icon: FaFilm },
  { title: "Music", icon: FaMusic },
  { title: "Basketball", icon: FaBasketballBall },
];
const skills = [
  {
    name: "NextJS",
    img: "/assets/img/next-js.svg",
    component: <Next />,
  },
  {
    name: "Python",
    img: "/assets/img/python-5.svg",
    component: <Python />,
  },
  {
    name: "Tailwind CSS",
    img: "/assets/img/tailwind-css-2.svg",
    component: <TailwindCSS />,
  },
  {
    name: "NodeJS",
    img: "/assets/img/nodejs-1.svg",
    component: <NodeJS />,
  },
  {
    name: "Figma",
    img: "/assets/img/figma-icon.svg",
    component: <Figma />,
  },
  {
    name: "ReactJS",
    img: "/assets/img/react-2.svg",
    component: <ReactJS />,
  },
];

const circles = [
  { label: "Creativity", percent: 60 },
  { label: "Communication", percent: 90 },
  { label: "Problem Solving", percent: 50 },
  { label: "Teamwork", percent: 85 },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<(typeof skills)[0] | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (skill: (typeof skills)[0]) => {
    setSelectedSkill(skill);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 800); // reset après animation
  };
  useEffect(() => {
    // animation conic-gradient dynamique
    circles.forEach((c, i) => {
      const circle = document.getElementById(`circle-${i}`);
      let progress = 0;
      const interval = setInterval(() => {
        if (progress >= c.percent) {
          clearInterval(interval);
        } else {
          progress++;
          if (circle) {
            circle.style.background = `conic-gradient(#7cf03d ${
              progress * 3.6
            }deg, #2c2c36 ${progress * 3.6}deg)`;
            circle.querySelector("span")!.textContent = `${progress}%`;
          }
        }
      }, 20);
    });
  }, []);

  return (
    <section className="skills py-12" id="skills">
      {/* SKILLS */}
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-[#7cf03d]">Skills</span>
      </h2>

      <div className=" rounded-2xl p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Hard Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 border border-[#7cf03d] rounded-xl flex flex-col items-center gap-3 cursor-pointer hover:scale-105 hover:shadow-[0_0_15px_#7cf03d] transition duration-300"
              onClick={() => openModal(skill)}
            >
              <div className="flex items-center justify-center w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <span className="text-sm sm:text-lg text-white font-medium text-center mt-2">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Modal */}
        <SkillModal
          skill={selectedSkill}
          isOpen={modalOpen}
          onClose={closeModal}
        />

        {/* Soft Skills */}
        <div className="grid grid-cols-2 gap-6 sm:gap-12 place-items-center">
          {circles.map((circle, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-center"
            >
              <div
                id={`circle-${i}`}
                className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full flex items-center justify-center relative"
                style={{
                  background: "conic-gradient(#7cf03d 0deg, #2c2c36 0deg)",
                }}
              >
                <span className="text-xs sm:text-sm md:text-base text-white font-bold relative z-10">
                  0%
                </span>
                <div className="absolute w-[60px] h-[60px] sm:w-[85px] sm:h-[85px] bg-[#1f242d] rounded-full"></div>
              </div>
              <p className="text-white text-sm sm:text-lg mt-2 sm:mt-3 whitespace-nowrap text-center max-w-[90px] ">
                {circle.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Personal Interests */}
      <div className="mt-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
          Personal <span className="text-[#7cf03d]">Interests</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center max-w-4xl mx-auto">
          {interests.map((interest, i) => {
            const Icon = interest.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-2 ">
                <Icon className="text-[#7cf03d] text-4xl" />
                <span className="text-white text-sm sm:text-base text-center">
                  {interest.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
