import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCopy } from 'react-icons/fa';

const ContactInfoCard = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      clickable: true,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      clickable: true,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Pune, India',
      href: null,
      clickable: false,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourusername',
      href: 'https://linkedin.com/in/yourusername',
      clickable: true,
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername',
      clickable: true,
    },
  ];

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('your.email@example.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8"
    >
      <h3 className="text-white text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-4">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          const content = (
            <div className="flex items-center gap-4 rounded-xl p-4 hover:bg-white/5 transition">
              <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                <Icon className="text-violet-400 text-lg" />
              </div>
              <div className="flex-1">
                <p className="text-white/60 text-sm mb-1">{info.label}</p>
                <p className="text-white font-medium">{info.value}</p>
              </div>
            </div>
          );

          if (info.clickable) {
            return (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block text-inherit no-underline hover:text-inherit"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {content}
              </motion.a>
            );
          }

          return <div key={info.label}>{content}</div>;
        })}
      </div>

      <div className="pt-6 border-t border-white/10 mt-6">
        <motion.button
          onClick={copyEmail}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 border border-white/20"
        >
          <FaCopy />
          {copiedEmail ? 'Email copied!' : 'Copy Email'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ContactInfoCard;
