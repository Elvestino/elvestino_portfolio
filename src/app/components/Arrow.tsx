"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Arrow() {
  const [show, setShow] = useState(false);

  // Afficher le bouton après avoir scrollé 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const home = document.querySelector("#home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!show) return null; // Ne rien afficher si pas scrolled

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-10 right-0 -translate-x-1/2 z-50 bg-[#7cf03d] p-3 rounded-full flex items-center justify-center shadow-lg cursor-pointer    hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]"
      animate={{ y: [0, 10, 0] }} // animation flottante
      transition={{ duration: 1.5, repeat: Infinity }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowUp size={24} className="text-black" />
    </motion.button>
  );
}
