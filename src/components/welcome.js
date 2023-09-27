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
        <div className="content">
          <img
            src="portfolio/dfbe7d64e9cbf7796cead59582156959-sticker.png"
            alt="Memoji"
          />
          <div className="texteWelcome">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 1 }}
            >
              <h1>
                Mon portfolio est <br />
                en cours de création...
              </h1>
              <h2>Revenez dans quelques semaines !</h2>
            </motion.div>
          </div>
        </div>
      </motion.a>
    </div>
  );
};
