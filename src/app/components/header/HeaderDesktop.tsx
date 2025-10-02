"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderDesktopProps {
  navigation: { name: string; href: string }[];
  onHomeClick: () => void;
  onLinkClick: (href: string) => void;
  activeSection: string;
}

export default function HeaderDesktop({
  navigation,
  onHomeClick,
  onLinkClick,
  activeSection,
}: HeaderDesktopProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`hidden md:flex fixed top-0 px-3 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-full max-w-[1144px] ${
        isScrolled ? "bg-[#101828]/80 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="max-w-full px-40 w-full flex justify-between items-center h-20">
        {/* Logo */}
        <div
          className="flex items-end gap-1 cursor-pointer"
          onClick={onHomeClick}
        >
          <span className="text-4xl font-bold text-white">Elvestino</span>
          <span className="text-[#7cf03d] text-4xl font-bold">.</span>
        </div>

        {/* Navigation desktop */}
        <nav className="flex space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onLinkClick(item.href);
              }}
              className={`text-lg font-medium transition-colors ${
                activeSection === item.href
                  ? "text-[#7cf03d] font-extrabold"
                  : "text-white hover:text-[#7cf03d]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
