"use client";

import { useState } from "react";
import CertificateCard from "./CertificateCard";
import certificates from "../../data/certificates.json";
import certificateDetails from "../../data/certificateDetails";
import CertificateModal from "./CertificateModal";
import Carousel from "../Carousel";
// Type pour le modal global
type ModalDataType = {
  cert: (typeof certificates)[number];
  detail: (typeof certificateDetails)[number];
} | null;

export default function Certificates() {
  const [modalData, setModalData] = useState<ModalDataType>(null); // <- modal global

  const openModal = (
    cert: (typeof certificates)[number],
    detail: (typeof certificateDetails)[number]
  ) => setModalData({ cert, detail });
  const closeModal = () => setModalData(null);

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 max-md:mx-5">
      <h2 className="w-full text-4xl font-bold text-center mb-5 max-md:text-3xl">
        My <span className="text-[#7cf03d]">Certificates</span>
      </h2>

      {/* Desktop / Tablet Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            year={cert.year}
            status={cert.status ? "To end" : "In progress"}
            images={cert.images}
            modalData={certificateDetails[index]}
            onOpenModal={() => openModal(cert, certificateDetails[index])} // <- fonction globale
          />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden max-w-md mx-auto relative max-md:mx-4">
        <Carousel
          items={certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              year={cert.year}
              status={cert.status ? "To end" : "In progress"}
              images={cert.images}
              modalData={certificateDetails[index]}
              onOpenModal={() => openModal(cert, certificateDetails[index])} // <- modal global mobile
            />
          ))}
        />
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
