import { motion } from "framer-motion";

const FadeInSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
    className="my-10"
  >
    {children}
  </motion.div>
);

export default FadeInSection;
