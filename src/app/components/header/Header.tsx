"use client";

import { useState, useEffect } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeClick = () => handleScroll("#home");

  // IntersectionObserver pour activeSection (côté client uniquement)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <HeaderDesktop
          navigation={navigation}
          onHomeClick={handleHomeClick}
          onLinkClick={handleScroll}
          activeSection={activeSection}
        />
      </div>

      <div className="block md:hidden">
        <HeaderMobile
          navigation={navigation}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          onHomeClick={handleHomeClick}
          onLinkClick={handleScroll}
          activeSection={activeSection}
        />
      </div>
    </>
  );
}
