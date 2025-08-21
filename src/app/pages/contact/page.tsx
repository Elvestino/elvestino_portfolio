import { Button } from "@/app/components/ui/button";
import { AiOutlinePhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";

export default function Page() {
  return (
    <section className="min-h-screen flex justify-center items-center  py-16 px-8 text-white">
      <div className="max-w-6xl w-full flex flex-wrap justify-center items-center gap-12">
        <h2 className="w-full text-4xl font-bold text-center mb-12">
          How Contact <span className="text-[#7cf03d]">Me</span>
        </h2>

        {/* ---------- GAUCHE ---------- */}
        <div className="flex-1 min-w-[320px] flex flex-col space-y-6 animate-slideInLeft">
          <div>
            <h2 className="text-2xl font-semibold mb-2 relative inline-block">
              For Contact me
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-[#7cf03d]"></span>
            </h2>
            <p className="text-gray-400">
              You can use the information below if needed
            </p>
          </div>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4 border border-[#7cf03d] pb-4 shadow-2xl rounded-lg p-4">
              <div className="w-14 h-14 border-2 border-[#7cf03d] rounded-full flex items-center justify-center ">
                <AiOutlinePhone size={40} color="#7cf03d" />
              </div>
              <div>
                <span className="block uppercase text-gray-400 text-xl">
                  Phone
                </span>
                <span className="block text-gray-300 text-xl">
                  +261 34 56 517 31
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 border border-[#7cf03d] pb-4 shadow-2xl rounded-lg p-4">
              <div className="w-14 h-14 border-2 border-[#7cf03d] rounded-full flex items-center justify-center">
                <GrMail size={32} color="#7cf03d" />
              </div>
              <div>
                <span className="block uppercase text-gray-400 text-xl">
                  Email
                </span>
                <span className="block text-gray-300 text-xl">
                  elvestinodorelin@gmail.com
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 border border-[#7cf03d] pb-4 shadow-2xl rounded-lg p-4">
              <div className="w-14 h-14 border-2 border-[#7cf03d] rounded-full flex items-center justify-center">
                <MdLocationOn size={35} color="#7cf03d" />
              </div>
              <div>
                <span className="block uppercase text-gray-400 text-xl">
                  Location
                </span>
                <span className="block text-gray-300 text-xl">
                  Andrainjato - Fianarantsoa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- DROITE (Formulaire) ---------- */}
        <div className="flex-1 min-w-[320px] border border-[#7cf03d] p-10 rounded-xl  animate-slideInRight">
          <form className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[48%] relative">
              <input
                type="text"
                required
                placeholder=" "
                className="w-full border-b-2 border-gray-600 text-white px-1 py-2 focus:border-[#7cf03d] focus:outline-none peer"
              />
              <label
                className="
      absolute left-0 bottom-2 text-gray-400 text-sm transition-all
      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400
      peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]
      peer-valid:-translate-y-6 peer-valid:text-[#7cf03d]
    "
              >
                Your Name
              </label>
            </div>

            <div className="flex-1 min-w-[48%] relative">
              <input
                type="email"
                required
                placeholder=" "
                className="w-full border-b-2 border-gray-600 text-white px-1 py-2 focus:border-[#7cf03d] focus:outline-none peer"
              />
              <label
                className="
      absolute left-0 bottom-2 text-gray-400 text-sm transition-all
      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400
      peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]
      peer-valid:-translate-y-6 peer-valid:text-[#7cf03d]
    "
              >
                Your Email
              </label>
            </div>

            <div className="flex-1 min-w-[48%] relative">
              <input
                type="text"
                required
                placeholder=" "
                className="w-full border-b-2 border-gray-600 text-white px-1 py-2 focus:border-[#7cf03d] focus:outline-none peer"
              />
              <label
                className="
      absolute left-0 bottom-2 text-gray-400 text-sm transition-all
      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400
      peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]
      peer-valid:-translate-y-6 peer-valid:text-[#7cf03d]
    "
              >
                Subject
              </label>
            </div>
            <div className="w-full relative">
              <textarea
                required
                placeholder=" "
                className="w-full h-56 resize-none border-b-2 border-gray-600 text-white px-1 pt-6 pb-2 focus:border-[#7cf03d] focus:outline-none peer"
              />
              <label
                className="
      absolute left-0 top-2 text-gray-400 text-sm transition-all
      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400
      peer-focus:-translate-y-6 peer-focus:text-[#7cf03d]
      peer-valid:-translate-y-6 peer-valid:text-[#7cf03d]
    "
              >
                Say Something
              </label>
            </div>

            <div className="w-full">
              <Button
                asChild
                className="bg-[#7cf03d] text-[#1f242d] border-2 border-[#7cf03d] shadow-[0_0_10px_#7cf03d] 
                 hover:bg-transparent hover:text-[#7cf03d] hover:shadow-none rounded-full px-6 py-3 font-semibold"
              >
                <a href="#">Send Message</a>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
