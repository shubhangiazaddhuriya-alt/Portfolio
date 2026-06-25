import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const AvailabilityCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="contact-card"
    >
      <div className="availability-status">
        <div className="status-dot"></div>
        <span className="status-text">Current Status</span>
      </div>
      
      <div>
        <p style={{ color: '#51cf66', fontWeight: 600, marginBottom: '1rem' }}>
          🟢 Available for Opportunities
        </p>
        <ul className="availability-list">
          <li>• Frontend Developer</li>
          <li>• Internships</li>
          <li>• Freelance Projects</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default AvailabilityCard;
