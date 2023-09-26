import React from "react";
import { motion } from "framer-motion";

export const Welcome = () => {
  return (
    <div className="Welcome">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ x: 0 }}
      >
        <div className="texteWelcome">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
          >
            <h1>
              Bonjour, je suis Gaël. je suis la branche dev<span>.</span>B
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 2 }}
          >
            <h2>Développeur Front-End</h2>
          </motion.div>
          
        </div>
      </motion.a>
    </div>
  );
};
