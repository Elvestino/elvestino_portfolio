"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CertificateCard from "./CertificateCard";
import certificates from "../../data/certificates.json";
import certificateDetails from "../../data/certificateDetails";
import CertificateModal from "./CertificateModal";
// Type pour le modal global
type ModalDataType = {
  cert: (typeof certificates)[number];
  detail: (typeof certificateDetails)[number];
} | null;

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalData, setModalData] = useState<ModalDataType>(null); // <- modal global

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const openModal = (
    cert: (typeof certificates)[number],
    detail: (typeof certificateDetails)[number]
  ) => setModalData({ cert, detail });
  const closeModal = () => setModalData(null);

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 max-md:mx-5">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        My <span className="text-[#7cf03d]">Certificates</span>
      </h2>

      {/* Desktop / Tablet Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            year={cert.year}
            status={cert.status ? "terminer" : "en cours"}
            images={cert.images}
            modalData={certificateDetails[index]}
            onOpenModal={() => openModal(cert, certificateDetails[index])} // <- fonction globale
          />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden max-w-md mx-auto relative">
        {/* Flèches */}
        <button
          onClick={prevSlide}
          className="absolute left-[-45px] top-1/2 -translate-y-1/2 text-[#7cf03d] text-3xl p-1 border border-[#7cf03d] rounded-full hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] duration-500 cursor-pointer"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[-45px] top-1/2 -translate-y-1/2 text-[#7cf03d] text-3xl p-1 border border-[#7cf03d] rounded-full hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] duration-500 cursor-pointer"
        >
          <IoIosArrowForward />
        </button>

        {/* Slides */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 gap-4"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certificates.map((cert, index) => (
              <div key={index} className="flex-shrink-0 max-md:w-[95%] mx-auto">
                <CertificateCard
                  title={cert.title}
                  year={cert.year}
                  status={cert.status ? "terminer" : "en cours"}
                  images={cert.images}
                  modalData={certificateDetails[index]}
                  onOpenModal={() => openModal(cert, certificateDetails[index])} // <- modal global mobile
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {certificates.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                index === currentIndex ? "bg-[#7cf03d]" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Modal global */}
      {modalData && (
        <CertificateModal
          isOpen={!!modalData}
          onClose={closeModal}
          title={modalData.cert.title}
          description={modalData.detail.description}
          images={modalData.detail.images}
          link={modalData.detail.link}
        />
      )}
    </section>
  );
}
