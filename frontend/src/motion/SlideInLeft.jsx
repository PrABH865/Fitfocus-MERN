// components/SlideInLeft.js
import { motion } from "framer-motion";

const SlideInLeft = ({ children }) => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="p-4"
  >
    {children}
  </motion.div>
);

export default SlideInLeft;
