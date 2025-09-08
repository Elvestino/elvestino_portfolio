"use client";
import DownloadCV from "@/app/components/DownloadCV";
import LetsTalk from "@/app/components/LetsTalk";
import Photos from "@/app/components/photos/Photos";
import SocialLinks from "@/app/components/SocialLinks";
import Stats from "@/app/components/stats/Stats";
import { useEffect, useState } from "react";

export default function HomeSection() {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Front-End Developer", "Designer", "Data Analyst"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);
  return (
    <main>
      {/* Hero section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 flex-grow px-[9%]">
        {/* Texte à gauche */}
        <div className="max-w-xl">
          {/* Information */}
          <div className="text-center md:text-left">
            <p className="text-2xl tracking-wide">Hi, My name is</p>

            <h1 className="text-5xl font-bold mt-2">
              <span className="text-transparent [-webkit-text-stroke:0.7px_#7cf03d] uppercase">
                TSIANOY
              </span>{" "}
              Karl Elvestino Dorelin
            </h1>

            {/* Texte animé */}
            <h2 className="mt-2 text-3xl ">
              I&apos;m a{" "}
              <span className="relative text-transparent [-webkit-text-stroke:0.7px_#7cf03d]">
                {texts[currentText]}
                <span className="absolute left-0 top-0 w-0 border-r-2 border-[#7cf03d] text-[#7cf03d] whitespace-nowrap overflow-hidden animate-typing">
                  {texts[currentText]}
                </span>
              </span>
            </h2>

            <p className="mt-6 text-base max-md:text-center leading-relaxed max-md:mx-1">
              Master’s degree in Data Science and Artificial Intelligence (SDIA)
              at EMIT Fianarantsoa <br />
              To build meaningful digital solutions in the fields of Web
              Development and Data Science, and to collaborate with passionate
              teams that share the same curiosity and dedication for learning
              and innovation.
            </p>
          </div>

          {/* Bouton + Réseaux */}
          <div className="flex items-center justify-center mt-6 max-md:flex-col max-md:gap-4">
            <div className="flex gap-4 mb-3">
              <DownloadCV />
              <LetsTalk />
            </div>
            <div className="md:ml-6">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Image à droite */}
        <div className="mt-20 md:mt-0">
          <Photos />
        </div>
      </section>

      {/* Experience en bas */}
      <div className="w-full ">
        <Stats />
      </div>
    </main>
  );
}
