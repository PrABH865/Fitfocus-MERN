import React from "react";
import { motion } from "framer-motion";

const SplitText = ({ text }) => {
  const letters = Array.from(text);

  return (
    <div className="text-[60px] font-bold flex  justify-center">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitText;
