"use client";
import { Button } from "@/app/components/ui/button";
import { AiOutlinePhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";

export default function Page() {
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const baseUrl = process.env.NEXT_PUBLIC_CONTACT_GOOGLE_URL;
    if (!baseUrl) return;

    const mailtoUrl = `${baseUrl}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Bonjour Elvestino,\n\n${message}\n\nDe: ${name} (${email})`
    )}`;

    window.open(mailtoUrl, "_blank");
  };

  return (
    <section className="min-h-screen flex justify-center items-center max-md:py-28 px-8 max-md:px-5 text-white">
      <div className="max-w-6xl w-full flex flex-wrap justify-center items-center gap-12 max-md:gap-6">
        <h2 className="w-full text-4xl font-bold text-center mb-5 max-md:text-3xl">
          How Contact <span className="text-[#7cf03d]">Me</span>
        </h2>

        {/* ---------- GAUCHE ---------- */}
        <div className="flex-1 min-w-[320px] flex flex-col space-y-6 animate-slideInLeft max-md:min-w-full max-md:space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2 relative inline-block max-md:text-xl">
              For Contact me
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-[#7cf03d] max-md:w-1/3"></span>
            </h2>
            <p className="text-gray-400 max-md:text-sm">
              You can use the information below if needed
            </p>
          </div>

          <div className="space-y-6 max-md:space-y-4">
            {/* Phone */}
            <div className="flex items-center gap-4 border border-[#7cf03d] pb-4 shadow-2xl rounded-lg p-4 max-md:p-3">
              <div className="w-14 h-14 border-2 border-[#7cf03d] rounded-full flex items-center justify-center max-md:w-12 max-md:h-12">
                <AiOutlinePhone
                  size={40}
                  color="#7cf03d"
                  className="max-md:w-8 max-md:h-8"
                />
              </div>
              <div>
                <span className="block uppercase text-gray-400 text-xl max-md:text-sm">
                  Phone
                </span>
                <span className="block text-gray-300 text-xl max-md:text-sm">
                  +261 34 56 517 31
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 border border-[#7cf03d] pb-4 shadow-2xl rounded-lg p-4 max-md:p-3">
              <div className="min-w-[20px] w-14 h-14 border-2 border-[#7cf03d] rounded-full flex items-center justify-center max-md:w-12 max-md:h-12">
                <GrMail
                  size={32}
                  color="#7cf03d"
                  className="max-md:w-6 max-md:h-6"
                />
              </div>
              <div>
                <span className="block uppercase text-gray-400 text-xl max-md:text-sm">
                  Email
                </span>
                <span className="block text-gray-300 text-xl max-md:text-sm">
                  elvestinodorelin@gmail.com
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 border border-[#7cf03d] pb-4 shadow-2xl rounded-lg p-4 max-md:p-3">
              <div className="w-14 h-14 border-2 border-[#7cf03d] rounded-full flex items-center justify-center max-md:w-12 max-md:h-12">
                <MdLocationOn
                  size={35}
                  color="#7cf03d"
                  className="max-md:w-6 max-md:h-6"
                />
              </div>
              <div>
                <span className="block uppercase text-gray-400 text-xl max-md:text-sm">
                  Location
                </span>
                <span className="block text-gray-300 text-xl max-md:text-sm">
                  Andrainjato - Fianarantsoa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- DROITE (Formulaire) ---------- */}
        <div className="flex-1 min-w-[320px] border border-[#7cf03d] p-10 rounded-xl animate-slideInRight max-md:min-w-full max-md:p-6">
          <form
            className="flex flex-wrap gap-4 max-md:gap-3"
            onSubmit={handleSendMessage}
          >
            <div className="flex-1 min-w-[48%] relative max-md:min-w-full">
              {/* name  */}
              <input
                type="text"
                required
                name="name"
                placeholder=" "
                className="w-full border-b-2 border-gray-600 text-white px-1 py-2 focus:border-[#7cf03d] focus:outline-none peer"
              />
              <label
                className="absolute left-0 bottom-2 text-gray-400 text-sm transition-all
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400
          peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]
          peer-valid:-translate-y-6 peer-valid:text-[#7cf03d]"
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
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400
          peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]
          peer-valid:-translate-y-6 peer-valid:text-[#7cf03d]"
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
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400
          peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]
          peer-valid:-translate-y-6 peer-valid:text-[#7cf03d]"
              >
                Subject
              </label>
            </div>
            {/* say something */}
            <div className="w-full relative">
              <textarea
                required
                name="message"
                placeholder=" "
                className="w-full h-56 resize-none border-b-2 border-gray-600 text-white px-1 pt-6 pb-2 focus:border-[#7cf03d] focus:outline-none peer max-md:h-40"
              />
              <label
                className="absolute left-0 top-2 text-gray-400 text-sm transition-all
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400
          peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]
          peer-valid:-translate-y-6 peer-valid:text-[#7cf03d]"
              >
                Say Something
              </label>
            </div>

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
    </section>
  );
}
