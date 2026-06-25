import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import '../styles/Contact.css';

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'LeetCode',
      icon: FaCode,
      url: 'https://leetcode.com/yourusername',
    },
  ];

  return (
    <div className="social-icons">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
            }}
            whileTap={{ scale: 0.95 }}
            className="social-icon"
            aria-label={`Visit ${social.name} profile`}
          >
            <Icon />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
