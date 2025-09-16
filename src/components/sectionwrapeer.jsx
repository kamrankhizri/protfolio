import { motion } from "framer-motion";

const SectionWrapper = ({ id, children, bg }) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center ${bg}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
