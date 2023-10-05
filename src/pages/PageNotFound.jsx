import React from "react";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <div className="not-found">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        style={{ color: "#ff6b6b", fontSize: "6rem" }}
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
        style={{ color: "#333", fontSize: "1.5rem" }}
      >
        Oops! The page you're looking for is under construction.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
        style={{ color: "#333", fontSize: "1.5rem" }}
      >
        Check back later
      </motion.p>
    </div>
  );
};

export default PageNotFound;
