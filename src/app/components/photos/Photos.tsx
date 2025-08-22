import { motion } from "framer-motion";
import Image from "next/image";

export default function Photos() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Cercle animé derrière */}
      <motion.svg
        className="absolute w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] z-0"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#7cf03d"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

      {/* Image au-dessus, plus grande */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.8, duration: 0.6, ease: "easeInOut" },
        }}
        className="relative w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] z-10"
      >
        <Image
          src="/assets/image.png"
          alt="profile"
          width={600}
          height={600}
          className="object-cover rounded-full"
          priority
        />
      </motion.div>
    </div>
  );
}
