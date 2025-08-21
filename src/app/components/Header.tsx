"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/pages/about" },
    { name: "Education", href: "/pages/education" },
    { name: "Experience", href: "/pages/experience" },
    { name: "Projects", href: "/pages/projects" },
    { name: "Skills", href: "/pages/skills" },
    { name: "Contact", href: "/pages/contact" },
  ];
  const hanldeHome = () => {
    router.push("/pages/home");
  };

  return (
    <header className="w-full top-0 z-50 fixed">
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#14171d]"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1f242d] px-6 pt-4 pb-6">
          <div className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-lg font-medium ${
                  pathname === item.href
                    ? "text-[#7cf03d] font-bold"
                    : "text-white hover:text-[#7cf03d]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
