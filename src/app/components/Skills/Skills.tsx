"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGamepad, FaFilm, FaMusic, FaBasketballBall } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { motion } from "framer-motion";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "../ui/dialog";
import { X } from "lucide-react";

// Déclarer les interests
const interests = [
  { title: "Video Games", icon: FaGamepad },
  { title: "Japanese Animation & Cinema", icon: FaFilm },
  { title: "Music", icon: FaMusic },
  { title: "Basketball", icon: FaBasketballBall },
];
const skills = [
  {
    name: "HTML",
    img: "/assets/img/html.svg",
    percent: 80,
  },
  {
    name: "Javascript",
    img: "/assets/img/javascript.svg",
    percent: 60,
  },
  {
    name: "NextJS",
    img: "/assets/img/nextjs.png",
    percent: 70,
  },
  {
    name: "Python",
    img: "/assets/img/python-5.svg",
    percent: 40,
  },
  {
    name: "Tailwind CSS",
    img: "/assets/img/tailwind-css-2.svg",
    percent: 70,
  },
  {
    name: "Figma",
    img: "/assets/img/6388512-middle2.png",
    percent: 75,
  },
  {
    name: "ReactJS",
    img: "/assets/img/react-2.svg",
    percent: 60,
  },
];

const circles = [
  { label: "Creativity", percent: 60 },
  { label: "Communication", percent: 90 },
  { label: "Problem Solving", percent: 50 },
  { label: "Teamwork", percent: 80 },
];
type Skill = {
  name: string;
  img: string;
  percent: number;
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
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
    <section className=" px-4 sm:px-6 lg:px-12 py-8 max-md:mx-5">
      {/* SKILLS */}
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-[#7cf03d]">Skills</span>
      </h2>

      <div className=" rounded-2xl p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Hard Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    onClick={() => setSelectedSkill(skill)} // ouvre le modal mobile
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #7cf03d" }} // hover desktop
                    whileTap={{ scale: 1.05, boxShadow: "0 0 15px #7cf03d" }} // click mobile
                    className="p-4 sm:p-6 border border-[#7cf03d] rounded-xl flex flex-col items-center gap-3 cursor-pointer transition duration-300"
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
                  </motion.div>
                </TooltipTrigger>

                <TooltipContent
                  side="top"
                  className="bg-[#1f242d] text-white border border-[#7cf03d] p-3 rounded-lg"
                >
                  <div className="w-40">
                    <p className="mb-2 text-lg text-center font-medium">
                      Mastery
                    </p>

                    <p className="mb-2 text-sm text-center font-medium">
                      {skill.name} – {skill.percent}%
                    </p>

                    {/* Barre de progression avec glow */}
                    <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      {/* Glow animé */}
                      <motion.div
                        initial={{ width: 0, opacity: 0.4 }}
                        animate={{ width: `${skill.percent}%`, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-[#7cf03d] blur-md"
                      />
                      {/* Barre principale */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percent}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative h-full bg-[#7cf03d]"
                      />
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="grid grid-cols-2 gap-6 place-items-center">
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
      <div className="mt-5 max-md:mx-5">
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

      {/* Modal pour mobile (max-md) */}
      <Dialog
        open={!!selectedSkill}
        onOpenChange={() => setSelectedSkill(null)}
      >
        <DialogContent className="max-md:max-w-xs max-md:mx-auto max-md:p-4 max-md:rounded-xl max-md:bg-[#1f242d] max-md:border max-md:border-[#7cf03d]">
          {/* Titre obligatoire pour accessibilité */}
          {selectedSkill && (
            <DialogTitle className="text-white text-center text-lg font-semibold mb-2">
              Mastery
            </DialogTitle>
          )}

          {/* Bouton fermeture X */}
          <DialogClose className="absolute right-3 top-3 text-white hover:text-[#7cf03d]">
            <X />
          </DialogClose>
          {/* Contenu du skill */}
          {selectedSkill && <SkillDetails skill={selectedSkill} />}
        </DialogContent>
      </Dialog>
    </section>
  );
}

// 🔹 Composant partagé Tooltip + Modal
function SkillDetails({ skill }: { skill: Skill }) {
  return (
    <div className="w-full">
      <p className="mb-2 text-sm text-center font-medium">
        {skill.name} – {skill.percent}%
      </p>

      {/* Barre de progression avec glow */}
      <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        {/* Glow animé */}
        <motion.div
          initial={{ width: 0, opacity: 0.4 }}
          animate={{ width: `${skill.percent}%`, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-[#7cf03d] blur-md"
        />
        {/* Barre principale */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.percent}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-full bg-[#7cf03d]"
        />
      </div>
    </div>
  );
}
