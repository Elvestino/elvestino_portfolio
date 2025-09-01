"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/pages/about" },
    { name: "Resume", href: "/pages/resume" },
    { name: "Projects", href: "/pages/projects" },
    { name: "Contact", href: "/pages/contact" },
  ];

  const hanldeHome = () => {
    router.push("/");
  };

  return (
    <header
      className={`w-full top-0 z-50 fixed transition-all duration-300 ${
        isScrolled ? "md:bg-[#101828]/80 md:backdrop-blur-md md:shadow-lg" : ""
      }`}
    >
      <div className="max-w-full px-6 md:px-40">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-end gap-1 cursor-pointer"
            onClick={hanldeHome}
          >
            <span className="text-3xl md:text-4xl font-bold text-white">
              Elvestino
            </span>
            <span className="text-[#7cf03d] text-4xl font-bold">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors ${
                  pathname === item.href
                    ? "text-[#7cf03d] font-extrabold"
                    : "text-white hover:text-[#7cf03d]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#7cf03d] hover:text-[#101828] duration-500 cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (slide depuis la droite) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#101828] z-40 transform transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Bouton close */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white p-2 hover:bg-[#7cf03d] hover:text-[#101828] rounded-md duration-500 cursor-pointer"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col h-full justify-between items-center p-6 pt-16">
          <div className="flex flex-col items-center space-y-3">
            <Image
              src={"/assets/Logo_2.png"}
              alt="logo"
              width={70}
              height={70}
            />
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-lg font-medium ${
                  pathname === item.href
                    ? "text-[#7cf03d] font-bold"
                    : "text-white hover:text-[#7cf03d]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Copyright en bas */}
          <div className="text-center text-white text-sm mb-2">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-[#7cf03d]">Elvestino.</span> <br /> All rights
            reserved.
          </div>
        </div>
      </div>
    </header>
  );
}
