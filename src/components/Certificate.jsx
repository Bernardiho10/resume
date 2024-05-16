// Certificate.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Certificate = ({ image, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`certificate ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpansion}
    >
      <motion.img
        src={image}
        alt={title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="expanded-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{title}</h3>
            {/* Add certificate details here */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificate;
