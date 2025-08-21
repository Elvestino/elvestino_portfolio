"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const texts = ["eveloppeur JavaScript", "esigner UI/UX"];

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isRemoving) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsRemoving(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsRemoving(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isRemoving, currentTextIndex, texts]);

  return (
    <motion.h1
      className="text-2xl font-bold text-green-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      D
      {displayText.split("").map((char, index) => (
        <span key={index} className="inline-block">
          {char}{" "}
        </span>
      ))}
    </motion.h1>
  );
}
