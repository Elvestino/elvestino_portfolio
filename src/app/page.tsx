"use client";
import DownloadCV from "@/app/components/DownloadCV";
import SocialLinks from "@/app/components/SocialLinks";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Front-End Developer", "Designer", "Data Analyst"];

  // Effet de texte qui alterne automatiquement
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);
  return (
    <main className="relative min-h-screen  text-white">
      {/* Contenu */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 h-screen px-[9%] text-white">
        {/* Texte */}
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

        {/* Image */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full flex items-center justify-center overflow-hidden">
          {/* Bordures animées plus épaisses */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full animate-spin-slow"
            style={{
              background:
                "conic-gradient(transparent 0deg, transparent 300deg, #7cf03d 300deg 360deg)",
              mask: "radial-gradient(farthest-side, black 90%, transparent 100%)",
              WebkitMask:
                "radial-gradient(farthest-side, black 90%, transparent 100%)",
            }}
          ></div>
          <div
            className="absolute w-[600px] h-[600px] rounded-full animate-spin-slow"
            style={{
              background:
                "conic-gradient(transparent 0deg, transparent 300deg, #7cf03d 300deg 360deg)",
              mask: "radial-gradient(farthest-side, black 90%, transparent 100%)",
              WebkitMask:
                "radial-gradient(farthest-side, black 90%, transparent 100%)",
              animationDelay: "-5s",
            }}
          ></div>

          {/* Conteneur image */}
          <div className="relative w-full h-full rounded-full bg-[#1f242d] border border-[#1f242d] flex items-center justify-center z-10 overflow-hidden">
            <Image
              src="/assets/img/img2.png"
              alt="profile"
              width={350}
              height={350}
              className="object-cover mix-blend-lighten absolute top-6"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
