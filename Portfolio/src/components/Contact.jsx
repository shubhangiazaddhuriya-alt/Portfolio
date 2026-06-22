import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';
import AvailabilityCard from './AvailabilityCard';
import SocialIcons from './SocialIcons';
import Toast from './Toast';

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
    <section className="py-28 px-6 lg:px-8 min-h-screen relative overflow-hidden" id="contact">
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss an opportunity? I'm currently open to internships, 
            freelance projects, and full-time frontend developer roles. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Column - Contact Form (60%) */}
          <div className="lg:col-span-3">
            <ContactForm onSubmit={handleFormSubmit} />
          </div>

          {/* Right Column - Contact Information (40%) */}
          <div className="lg:col-span-2 space-y-6">
            <ContactInfoCard />
            <AvailabilityCard />
            
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-3"
            >
              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
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
