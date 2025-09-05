"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderMobileProps {
  pathname: string;
  navigation: { name: string; href: string }[];
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  onHomeClick: () => void;
}

export default function HeaderMobile({
  pathname,
  navigation,
  isMenuOpen,
  setIsMenuOpen,
  onHomeClick,
}: HeaderMobileProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full max-md:fixed max-md:top-0 max-md:w-full max-md:z-50 max-md:transition-all max-md:duration-300 ${
          isScrolled || isMenuOpen
            ? "max-md:bg-[#101828]/80 max-md:backdrop-blur-md max-md:shadow-lg"
            : ""
        }`}
      >
        <div className="flex justify-between items-center h-20 max-md:flex max-md:justify-between max-md:items-center max-md:h-20 max-md:px-5">
          <div
            className="flex items-end gap-1 cursor-pointer max-md:flex max-md:items-end max-md:gap-1 max-md:cursor-pointer"
            onClick={onHomeClick}
          >
            <span className="text-3xl font-bold text-white max-md:text-3xl max-md:font-bold max-md:text-white">
              Elvestino
            </span>
            <span className="text-[#7cf03d] text-4xl font-bold max-md:text-4xl max-md:font-bold">
              .
            </span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white max-md:inline-flex max-md:items-center max-md:justify-center max-md:p-2 max-md:rounded-md max-md:text-white max-md:hover:bg-[#7cf03d] max-md:hover:text-[#101828] max-md:duration-500 max-md:cursor-pointer"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 max-md:h-6 max-md:w-6" />
            ) : (
              <Menu className="h-6 w-6 max-md:h-6 max-md:w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md max-md:fixed max-md:inset-0 max-md:bg-black/40 max-md:backdrop-blur-md max-md:z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#101828] transform transition-transform duration-500 ease-in-out max-md:fixed max-md:top-0 max-md:right-0 max-md:h-full max-md:w-64 max-md:bg-[#101828] max-md:transform max-md:transition-transform max-md:duration-500 max-md:ease-in-out max-md:z-50 ${
          isMenuOpen
            ? "translate-x-0 max-md:translate-x-0"
            : "translate-x-full max-md:translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white p-2 hover:bg-[#7cf03d] hover:text-[#101828] rounded-md duration-500 cursor-pointer max-md:absolute max-md:top-4 max-md:right-4 max-md:text-white max-md:p-2 max-md:hover:bg-[#7cf03d] max-md:hover:text-[#101828] max-md:rounded-md max-md:duration-500 max-md:cursor-pointer"
        >
          <X className="h-6 w-6 max-md:h-6 max-md:w-6" />
        </button>

        <div className="flex flex-col h-full justify-between items-center p-6 pt-16 max-md:flex max-md:flex-col max-md:h-full max-md:justify-between max-md:items-center max-md:p-6 max-md:pt-16">
          <div className="flex flex-col items-center space-y-3 max-md:flex max-md:flex-col max-md:items-center max-md:space-y-3">
            <Image
              src={"/assets/Logo_2.png"}
              alt="logo"
              width={70}
              height={70}
              className="max-md:w-[70px] max-md:h-[90px]"
            />
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-lg font-medium max-md:block max-md:text-lg max-md:font-medium ${
                  pathname === item.href
                    ? "text-[#7cf03d] font-bold max-md:text-[#7cf03d] max-md:font-bold"
                    : "text-white hover:text-[#7cf03d] max-md:text-white max-md:hover:text-[#7cf03d]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="text-center text-white text-sm mb-2 max-md:text-center max-md:text-white max-md:text-sm max-md:mb-2">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-[#7cf03d] max-md:text-[#7cf03d]">
              Elvestino.
            </span>{" "}
            <br /> All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
