"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ModalGalleryProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  link: string;
};

export default function ModalGallery({
  isOpen,
  onClose,
  title,
  description,
  images,
  link,
}: ModalGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleClose = () => setIsClosing(true);

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const modalVariants = {
    open: { rotateY: 0, scale: 1, opacity: 1 },
    closed: { rotateY: -360, scale: 0.8, opacity: 0 },
  };

  const truncateText = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  const imageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      {(isOpen || isClosing) && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50 p-2 md:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-[#101828] p-4 sm:p-6 rounded-2xl shadow-xl w-[80%]  md:w-full  max-w-md md:max-w-2xl relative text-white"
            variants={modalVariants}
            initial="closed"
            animate={isClosing ? "closed" : "open"}
            onAnimationComplete={() => {
              if (isClosing) {
                setIsClosing(false);
                onClose();
              }
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-white hover:text-[#7cf03d] cursor-pointer duration-300"
            >
              <X size={28} />
            </button>

            <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>

            {/* Carousel */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 flex items-center justify-center mb-4 overflow-hidden">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentIndex}
                  className="absolute w-full h-full"
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`image-${currentIndex}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 cursor-pointer"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 cursor-pointer"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            <div className="flex justify-center gap-2 mb-4">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    idx === currentIndex ? "bg-[#7cf03d]" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-between items-center gap-4 md:gap-10">
              <p className="text-gray-300 mb-2 text-justify">
                {showFullDescription
                  ? description
                  : truncateText(description, 6)}{" "}
              </p>
              <span>
                {description.split(" ").length > 6 && (
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-[#7cf03d] hover:text-green-500 text-sm mb-4 cursor-pointer"
                  >
                    {showFullDescription ? "Voir moins" : "Voir plus"}
                  </button>
                )}
              </span>
            </div>
            <span>
              For more information, please click{" "}
              <a
                href={link}
                className="text-[#7cf03d] hover:text-green-500 underline italic"
              >
                here
              </a>
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
