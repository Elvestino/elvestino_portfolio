import { motion } from "framer-motion";
export default function Stairs() {
  const variants = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
  };
  const reverse = (index: number) => {
    const total = 6;
    return total - index - 1;
  };
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverse(index) * 0.1,
            }}
            className="h-full w-full bg-[#1f242d] relative"
          />
        );
      })}
    </>
  );
}
