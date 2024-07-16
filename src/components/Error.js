import React from 'react';
import { motion } from 'framer-motion';

const Error = ({ type }) => {
  const getMessage = () => {
    switch(type) {
      case 'category':
        return 'No projects found in this category.';
      case 'search':
        return 'No projects match your search criteria.';
      case 'loading':
        return 'Unable to load projects at this time.';
      default:
        return 'Sorry, unable to connect to my projects!';
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center mt-20 mb-20 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-2xl font-bold mb-4 text-ternary-dark dark:text-ternary-light"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {getMessage()}
      </motion.h2>
      <motion.p 
        className="text-lg text-ternary-dark dark:text-ternary-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Try again later...
      </motion.p>
    </motion.div>
  );
};

export default Error;