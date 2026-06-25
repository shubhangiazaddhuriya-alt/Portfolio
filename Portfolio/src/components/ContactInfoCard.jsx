import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCopy } from 'react-icons/fa';
import '../styles/Contact.css';

const ContactInfoCard = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'shubhangiazaddhuriya@gmail.com',
      href: 'mailto:your.email@example.com',
      clickable: true,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9665443419',
      href: 'tel:+9665443419',
      clickable: true,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Nagpur, India',
      href: null,
      clickable: false,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'https://linkedin.com/in/shubhangidhuriya',
      href: 'https://linkedin.com/in/yourusername',
      clickable: true,
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/shubhangidhuriya',
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
      className="contact-card"
    >
      <h3>Contact Information</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          const content = (
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Icon />
              </div>
              <div className="contact-info-content">
                <div className="contact-info-label">{info.label}</div>
                <div className="contact-info-value">{info.value}</div>
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

      <div style={{ paddingTop: '1.5rem', marginTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
        <motion.button
          onClick={copyEmail}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-secondary w-full"
        >
          <FaCopy />
          {copiedEmail ? 'Email copied!' : 'Copy Email'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ContactInfoCard;
