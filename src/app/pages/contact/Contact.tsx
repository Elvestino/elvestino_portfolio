"use client";

import { BiPhone } from "react-icons/bi";
import { Button } from "@/app/components/ui/button";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";

export default function ContactSection() {
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=elvestinodorelin@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Bonjour Elvestino,\n\n${message}\n\nDe: ${name} (${email})`
    )}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <section className=" flex justify-center items-center max-md:py-6 px-8 md:my-20 max-md:px-5 text-white max-w-[1920px]">
      <div className="max-w-6xl w-full md:my-10">
        {/* Titre principal */}
        <h2 className="w-full text-5xl font-bold text-center mb-10 max-md:text-3xl max-md:mb-6">
          How Contact <span className="text-[#7cf03d]">Me</span>
        </h2>

        {/* Sous-titre */}
        <div className="mb-10 max-md:mb-6">
          <h2 className="text-2xl font-semibold mb-2 relative inline-block max-md:text-xl">
            For Contact Me
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-[#7cf03d] max-md:w-1/3"></span>
          </h2>
          <p className="text-gray-400 max-md:text-sm">
            You can use the information below if needed
          </p>
        </div>

        {/* Colonnes (formulaire + infos) */}
        <div className="flex flex-row-reverse max-md:flex-col-reverse justify-center items-start gap-12 max-md:gap-8">
          {/* ---------- Infos (GAUCHE) ---------- */}
          <div className="flex-1 min-w-[320px] flex flex-col space-y-6 animate-slideInLeft max-md:min-w-full max-md:space-y-4">
            {/* Phone */}
            <div className="flex items-center gap-4 border border-[#7cf03d] rounded-lg p-4 shadow-2xl max-md:p-3 ">
              <div className="w-14 h-14 border-2 border-[#7cf03d] rounded-full flex items-center justify-center max-md:w-12 max-md:h-12 min-md:w-5 min-md:h-5">
                <BiPhone
                  size={40}
                  color="#7cf03d"
                  className="max-md:w-8 max-md:h-8"
                />
              </div>
              <div>
                <span className="block uppercase text-gray-400 text-sm">
                  Phone
                </span>
                <span className="block text-gray-300 text-lg">
                  +261 34 56 517 31
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 border border-[#7cf03d] rounded-lg p-4 shadow-2xl max-md:p-3">
              <div className="w-14 h-14 border-2 border-[#7cf03d] rounded-full flex items-center justify-center max-md:w-12 max-md:h-12">
                <GrMail
                  size={32}
                  color="#7cf03d"
                  className="max-md:w-6 max-md:h-6"
                />
              </div>
              <div>
                <span className="block uppercase text-gray-400 text-sm">
                  Email
                </span>
                <span className="block text-gray-300 text-lg">
                  elvestinodorelin@gmail.com
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 border border-[#7cf03d] rounded-lg p-4 shadow-2xl max-md:p-3">
              <div className="w-14 h-14 border-2 border-[#7cf03d] rounded-full flex items-center justify-center max-md:w-12 max-md:h-12">
                <MdLocationOn
                  size={35}
                  color="#7cf03d"
                  className="max-md:w-6 max-md:h-6"
                />
              </div>
              <div>
                <span className="block uppercase text-gray-400 text-sm">
                  Location
                </span>
                <span className="block text-gray-300 text-lg">
                  Andrainjato - Fianarantsoa
                </span>
              </div>
            </div>
          </div>

          {/* ---------- Formulaire (DROITE) ---------- */}
          <div className="flex-1 min-w-[320px] border border-[#7cf03d] p-10 rounded-xl animate-slideInRight max-md:min-w-full max-md:p-6">
            <form
              className="flex flex-wrap gap-6 max-md:gap-4"
              onSubmit={handleSendMessage}
            >
              {/* name */}
              <div className="flex-1 min-w-[48%] relative max-md:min-w-full">
                <input
                  type="text"
                  required
                  name="name"
                  placeholder=" "
                  className="w-full border-b-2 border-gray-600 text-white px-1 py-2 focus:border-[#7cf03d] focus:outline-none peer"
                />
                <label
                  className="absolute left-0 bottom-2 text-gray-400 text-sm transition-all
              peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]"
                >
                  Your Name
                </label>
              </div>

              {/* email */}
              <div className="flex-1 min-w-[48%] relative max-md:min-w-full">
                <input
                  type="email"
                  required
                  name="email"
                  placeholder=" "
                  className="w-full border-b-2 border-gray-600 text-white px-1 py-2 focus:border-[#7cf03d] focus:outline-none peer"
                />
                <label
                  className="absolute left-0 bottom-2 text-gray-400 text-sm transition-all
              peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]"
                >
                  Your Email
                </label>
              </div>

              {/* subject */}
              <div className="flex-1 min-w-[48%] relative max-md:min-w-full">
                <input
                  type="text"
                  required
                  name="subject"
                  placeholder=" "
                  className="w-full border-b-2 border-gray-600 text-white px-1 py-2 focus:border-[#7cf03d] focus:outline-none peer"
                />
                <label
                  className="absolute left-0 bottom-2 text-gray-400 text-sm transition-all
              peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]"
                >
                  Subject
                </label>
              </div>

              {/* message */}
              <div className="w-full relative">
                <textarea
                  required
                  name="message"
                  placeholder=" "
                  className="w-full h-56 resize-none border-b-2 border-gray-600 text-white px-1 pt-6 pb-2 focus:border-[#7cf03d] focus:outline-none peer max-md:h-40"
                />
                <label
                  className="absolute left-0 top-2 text-gray-400 text-sm transition-all
              peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]"
                >
                  Say Something
                </label>
              </div>

              {/* bouton */}
              <div className="w-full">
                <Button
                  type="submit"
                  className="bg-[#7cf03d] text-[#1f242d] border-2 border-[#7cf03d] shadow-[0_0_10px_#7cf03d] 
                hover:bg-transparent hover:text-[#7cf03d] hover:shadow-none rounded-full px-6 py-3 font-semibold cursor-pointer"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
