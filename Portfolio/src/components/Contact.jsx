import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';
import AvailabilityCard from './AvailabilityCard';
import SocialIcons from './SocialIcons';
import Toast from './Toast';
import '../styles/Contact.css';

const Contact = () => {
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success',
  });

  const handleFormSubmit = async (data) => {
    console.log('Form submitted:', data);
    
    setToast({
      show: true,
      message: 'Thank you! Your message has been sent successfully.',
      type: 'success',
    });

    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 5000);
  };

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Have a project in mind or want to discuss an opportunity? I'm currently open to internships, 
            freelance projects, and full-time frontend developer roles. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Column - Contact Form */}
          <div className="contact-form-wrapper">
            <ContactForm onSubmit={handleFormSubmit} />
          </div>

          {/* Right Column - Contact Information */}
          <div className="contact-info-wrapper">
            <ContactInfoCard />
            <AvailabilityCard />
            
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="quick-actions"
            >
              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary w-full"
              >
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <SocialIcons />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
