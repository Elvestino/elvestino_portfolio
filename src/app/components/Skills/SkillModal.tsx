"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { JSX } from "react";

interface SkillModalProps {
  skill: {
    name: string;
    img: string;
    component: JSX.Element;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SkillModal({
  skill,
  isOpen,
  onClose,
}: SkillModalProps) {
  if (!skill) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background flou */}
          <motion.div
            className="fixed inset-0   bg-opacity-70 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal principal */}
          <motion.div
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden p-6 bg-[#1f242d] shadow-xl max-w-4xl w-full"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            exit={{ scale: 0, rotate: -360 }}
            transition={{ duration: 0.8 }}
          >
            {/* Bouton close */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-[#7cf03d] cursor-pointer"
            >
              &times;
            </button>

            {/* Logo petit en haut à gauche */}
            <div className="absolute top-4 left-13 w-12 h-12 flex items-center justify-center gap-2">
              <Image
                src={skill.img}
                alt={skill.name}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
              <span>{skill.name}</span>
            </div>

            {/* Composant dynamique */}
            <div className="mt-12">{skill.component}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
