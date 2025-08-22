"use client";
import DownloadCV from "@/app/components/DownloadCV";
import SocialLinks from "@/app/components/SocialLinks";
import { useEffect, useState } from "react";
import Photos from "./components/photos/Photos";
import Stats from "./components/stats/Stats";

export default function Home() {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Front-End Developer", "Designer", "Data Analyst"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto text-white flex flex-col">
      {/* Hero section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 flex-grow px-[9%]">
        {/* Texte à gauche */}
        <div className="max-w-xl">
          <p className="text-2xl tracking-wide">Hi, My name is</p>
          <h1 className="text-5xl font-bold mt-2">
            <span className="text-transparent [-webkit-text-stroke:0.7px_#7cf03d] uppercase">
              TSIANOY
            </span>{" "}
            Karl Elvestino Dorelin
          </h1>

          {/* Texte animé */}
          <h2 className="mt-2 text-3xl">
            I&apos;m a{" "}
            <span className="relative text-transparent [-webkit-text-stroke:0.7px_#7cf03d]">
              {texts[currentText]}
              <span className="absolute left-0 top-0 w-0 border-r-2 border-[#7cf03d] text-[#7cf03d] whitespace-nowrap overflow-hidden animate-typing">
                {texts[currentText]}
              </span>
            </span>
          </h2>

          <p className="mt-4 text-base text-justify leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            quo placeat atque voluptates enim beatae ducimus eaque facere
            commodi. Eligendi fugit, reiciendis libero deserunt maiores qui quia
            harum numquam enim?
          </p>

          {/* Bouton + Réseaux */}
          <div className="flex items-center mt-6">
            <DownloadCV />
            <div className="ml-6">
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
