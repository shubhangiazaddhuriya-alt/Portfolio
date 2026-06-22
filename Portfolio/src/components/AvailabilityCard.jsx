import React from 'react';
import { motion } from 'framer-motion';

const AvailabilityCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <motion.div
            className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <h3 className="text-white font-semibold text-lg">Current Status</h3>
      </div>
      
      <div className="space-y-2">
        <p className="text-green-400 font-medium">🟢 Available for Opportunities</p>
        <div className="text-white/80 text-sm space-y-1 mt-3">
          <p>• Frontend Developer</p>
          <p>• Internships</p>
          <p>• Freelance Projects</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AvailabilityCard;
