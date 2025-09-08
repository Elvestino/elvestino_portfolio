"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function LetsTalk() {
  return (
    <Button
      asChild
      className="bg-transparent text-[#7cf03d] border-2 border-[#7cf03d] shadow-none hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] rounded-full px-6 py-3 font-semibold"
    >
      <a href="#contact">
        Let&apos;s Talk <MessageCircle className="ml-2 h-5 w-5" />
      </a>
    </Button>
  );
}
