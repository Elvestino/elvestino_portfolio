"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import Experience from "@/app/components/Experience/Experience";
import Education from "@/app/components/Education/Education";
import Skills from "@/app/components/Skills/Skills";
import Certificat from "@/app/components/Certification/Certificat";
import Tools from "@/app/components/tools/Tools";

const tabs = [
  { id: "experience", label: "Experience", component: <Experience /> },
  { id: "education", label: "Education", component: <Education /> },
  { id: "certificat", label: "Certification", component: <Certificat /> },
  { id: "tools", label: "Tools", component: <Tools /> },
  { id: "skills", label: "Skills", component: <Skills /> },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("experience");
  const [direction, setDirection] = useState(0);

  const handleChangeTab = (newTab: string) => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    const newIndex = tabs.findIndex((t) => t.id === newTab);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newTab);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const activeComponent = tabs.find((t) => t.id === activeTab)?.component;

  return (
    <div className="p-6 m-24">
      <div className="mx-auto p-6 mb-8">
        <h2 className="text-4xl md:text-6xl text-center mb-4">
          Why <span className="text-[#7cf03d]">hire me</span> ?
        </h2>
        <p className="text-sm md:text-base text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis non
          dolore temporibus tenetur provident quaerat dolores saepe nisi nulla
          iure nobis est magni fuga explicabo, excepturi tempora aut molestias
          incidunt.
        </p>
      </div>

      {/* Onglets shadcn */}
      <Tabs
        value={activeTab}
        onValueChange={handleChangeTab}
        className="w-full flex items-center justify-center"
      >
        <TabsList
          className="
            grid grid-cols-2 gap-2 
            md:flex md:justify-center md:gap-4 mb-4
          "
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="transition text-base md:text-2xl px-4 py-3 md:px-10 md:py-6 cursor-pointer 
              data-[state=active]:text-[#7cf03d] 
              rounded hover:border-[#7cf03d] duration-500 
              hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Contenu animé en carrousel */}
      <div className="relative w-full transition">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {activeComponent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
