// components/SplitTitle.js
import { motion } from "framer-motion";

const SplitTitle = ({ text }) => {
  return (
    <h1 className="text-4xl font-bold text-center mb-6 text-orange-600">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};

export default SplitTitle;
