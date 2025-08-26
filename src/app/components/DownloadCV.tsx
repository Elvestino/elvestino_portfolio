"use client";

import { Download } from "lucide-react";
import { Button } from "./ui/button";

export default function DownloadCV() {
  return (
    <Button
      asChild
      className="bg-[#7cf03d] text-[#1f242d] border-2 border-[#7cf03d] shadow-[0_0_10px_#7cf03d] hover:bg-transparent hover:text-[#7cf03d] hover:shadow-none rounded-full px-6 py-3 font-semibold"
    >
      <a href="/assets/CV_Elvestino.pdf" download="CV_Elvestino.pdf">
        Download CV <Download className="ml-2 h-5 w-5" />
      </a>
    </Button>
  );
}
