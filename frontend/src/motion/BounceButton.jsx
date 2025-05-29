// components/BounceButton.js
import { motion } from "framer-motion";

const BounceButton = ({ text }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="bg-orange-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl shadow-lg mt-4"
  >
    {text}
  </motion.button>
);

export default BounceButton;
