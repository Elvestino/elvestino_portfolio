"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardFooter } from "../ui/card";
import CertificateModal from "./CertificateModal";

type CertificateCardProps = {
  title: string;
  year: number;
  status: "terminer" | "en cours";
  images: string[];
  modalData: {
    images: string[];
    description: string;
    link: string;
  };
  onOpenModal?: () => void; // <-- nouvelle prop
};

export default function CertificateCard({
  title,
  year,
  status,
  images,
  modalData,
  onOpenModal,
}: CertificateCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Slider automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Card className="w-full sm:max-w-sm  md:max-w-xs h-[500px] sm:h-[550px] md:h-[480px] flex flex-col overflow-hidden bg-[#22222c] md:hover:bg-[#101828] text-[#7cf03d] rounded-xl shadow-lg transition-all md:hover:scale-105 md:hover:-translate-y-2 md:hover:shadow-[0_0_10px_#7cf03d] duration-500 ">
        <div className="relative h-1/2 w-full">
          <div
            className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentImage * 100}%)`,
            }}
          >
            {images.map((img, idx) => (
              <div key={idx} className="relative w-full flex-shrink-0 h-full">
                <Image
                  src={img}
                  alt={`${title}-${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bullets */}
        <div className="flex justify-center gap-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentImage === idx ? "bg-[#7cf03d]" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        <CardHeader className="px-2 sm:px-4 pt-2">
          <CardTitle className="text-sm sm:text-base">{title}</CardTitle>
          <p className="text-xs sm:text-sm text-muted-foreground">{year}</p>
          <span
            className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded w-fit ${
              status === "terminer"
                ? "bg-green-500 text-white"
                : "bg-yellow-500 text-black"
            }`}
          >
            {status === "terminer" ? "Terminé" : "En cours"}
          </span>
        </CardHeader>

        <CardFooter className="mt-auto px-2 sm:px-4 pb-4">
          <button
            onClick={onOpenModal ? onOpenModal : () => setIsModalOpen(true)}
            className="w-full px-3 py-2 text-sm sm:text-base bg-[#7cf03d] text-black font-medium rounded-lg hover:opacity-80 transition duration-500 cursor-pointer"
          >
            Voir plus
          </button>
        </CardFooter>
      </Card>

      {/* Optionnel : modal interne pour desktop */}
      {isModalOpen && !onOpenModal && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
          description={modalData.description}
          images={modalData.images}
          link={modalData.link}
        />
      )}
    </>
  );
}
