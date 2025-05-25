// components/AnimatedImage.js
import { motion } from "framer-motion";

const AnimatedImage = ({ src, alt }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-full max-w-md rounded-xl shadow-lg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
};

export default AnimatedImage;
