"use client";

import ModalGallery from "./ModalGallery";

type CertificateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  link: string;
};

export default function CertificateModal(props: CertificateModalProps) {
  return <ModalGallery {...props} />;
}
