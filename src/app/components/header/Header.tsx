"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/pages/about" },
    { name: "Resume", href: "/pages/resume" },
    { name: "Projects", href: "/pages/projects" },
    { name: "Contact", href: "/pages/contact" },
  ];

  const handleHomeClick = () => router.push("/");

  return (
    <>
      <div className="hidden md:block">
        <HeaderDesktop
          pathname={pathname}
          navigation={navigation}
          onHomeClick={handleHomeClick}
        />
      </div>
      <div className="block md:hidden">
        <HeaderMobile
          pathname={pathname}
          navigation={navigation}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          onHomeClick={handleHomeClick}
        />
      </div>
    </>
  );
}
