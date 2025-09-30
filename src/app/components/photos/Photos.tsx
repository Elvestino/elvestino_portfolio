import { motion } from "framer-motion";
import Image from "next/image";

export default function Photos() {
  // Définir les classes de taille comme une constante pour plus de lisibilité
  // La taille par défaut (mobile) est réduite à 300px.
  // Elle passe à 400px à partir de sm (640px) et à 600px à partir de xl (1280px).
  const sizeClasses =
    "w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] xl:w-[600px] xl:h-[600px]";

  return (
    <div className="relative flex items-center justify-center">
      {/* Cercle animé derrière */}
      <motion.svg
        // Utilisation des classes de taille définies
        className={`absolute ${sizeClasses} z-0`}
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
        // Utilisation des classes de taille définies
        className={`relative ${sizeClasses} z-10`}
      >
        <Image
          src="/assets/image.png"
          alt="profile"
          // Les attributs width et height doivent rester à la taille maximale (600)
          // pour des raisons d'optimisation Next.js/performance,
          // le CSS gère le redimensionnement réel.
          width={600}
          height={600}
          className="object-cover rounded-full"
          priority
        />
      </motion.div>
    </div>
  );
}
