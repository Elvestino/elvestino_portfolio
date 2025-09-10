"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type CarouselProps = {
  items: React.ReactNode[]; // les éléments à afficher (cards, images, etc.)
};

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [mouseStartX, setMouseStartX] = useState<number | null>(null);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));

  return (
    <div className="relative max-w-md mx-auto">
      {/* Flèches */}
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

      {/* Container swipeable */}
      <div
        className="overflow-hidden"
        onTouchStart={(e) => {
          const x = e.touches[0]?.clientX;
          if (x) setTouchStartX(x);
        }}
        onTouchEnd={(e) => {
          const endX = e.changedTouches[0]?.clientX;
          if (endX !== undefined && touchStartX !== null) {
            const diff = touchStartX - endX;
            const threshold = 50;
            if (diff > threshold) nextSlide();
            else if (diff < -threshold) prevSlide();
          }
          setTouchStartX(null);
        }}
        onMouseDown={(e) => setMouseStartX(e.clientX)}
        onMouseUp={(e) => {
          if (mouseStartX !== null) {
            const diff = mouseStartX - e.clientX;
            const threshold = 50;
            if (diff > threshold) nextSlide();
            else if (diff < -threshold) prevSlide();
          }
          setMouseStartX(null);
        }}
        style={{ touchAction: "pan-y" }}
      >
        <div
          className="flex transition-transform duration-300 gap-4"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 max-md:w-[96%] mx-auto">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === currentIndex ? "bg-[#7cf03d]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
