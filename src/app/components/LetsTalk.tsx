"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function LetsTalk() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // éviter le jump brutal
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="bg-transparent text-[#7cf03d] border-2 border-[#7cf03d] shadow-none hover:bg-[#7cf03d] cursor-pointer hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] rounded-full px-6 py-3 font-semibold flex items-center justify-center"
    >
      Let&apos;s Talk <MessageCircle className="ml-2 h-5 w-5" />
    </Button>
  );
}
