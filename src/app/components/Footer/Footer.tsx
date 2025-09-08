"use client";

export default function Footer() {
  return (
    <footer className=" py-6 ">
      <div className="text-center text-white text-sm md:text-base lg:text-lg mb-2 md:mb-0 whitespace-nowrap">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#7cf03d]">Elvestino.</span> All rights reserved.
      </div>
    </footer>
  );
}
