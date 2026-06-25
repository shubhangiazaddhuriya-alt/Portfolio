import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpinner, FaUser, FaEnvelope, FaPaperPlane, FaComment, FaCheck, FaTimes } from 'react-icons/fa';
import '../styles/Contact.css';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(15, 'Message must be at least 15 characters'),
});

const ContactForm = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const onFormSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      await onSubmit(data);
      reset();
      setMessageLength(0);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { name: 'name', label: 'Full Name', placeholder: 'Your Name ', icon: FaUser },
    { name: 'email', label: 'Email Address', placeholder: '@gmail.com', icon: FaEnvelope },
    { name: 'subject', label: 'Subject', placeholder: 'Project Inquiry', icon: FaPaperPlane },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="contact-card"
    >
      <form onSubmit={handleSubmit(onFormSubmit)} className="contact-form">
        {fields.map((field) => {
          const Icon = field.icon;
          return (
            <div key={field.name} className="form-group">
              <label htmlFor={field.name} className="form-label">
                {field.label}
              </label>
              <Icon className="form-icon" />
              <input
                id={field.name}
                type={field.name === 'email' ? 'email' : 'text'}
                {...register(field.name)}
                placeholder={field.placeholder}
                className="form-input"
                disabled={isSubmitting}
                aria-invalid={errors[field.name] ? 'true' : 'false'}
                aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              />
              <AnimatePresence>
                {errors[field.name] && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    id={`${field.name}-error`}
                    className="form-error"
                    role="alert"
                  >
                    <FaTimes className="text-xs" />
                    {errors[field.name].message}
                  </motion.p>
                )}
                {touchedFields[field.name] && !errors[field.name] && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="form-success"
                  >
                    <FaCheck className="text-xs" />
                    Looks good!
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <FaComment className="form-icon" />
          <textarea
            id="message"
            {...register('message', {
              onChange: (e) => setMessageLength(e.target.value.length),
            })}
            placeholder="Tell me about your project..."
            className="form-textarea"
            disabled={isSubmitting}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          <div className="flex justify-between items-center">
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  id="message-error"
                  className="form-error"
                  role="alert"
                >
                  <FaTimes className="text-xs" />
                  {errors.message.message}
                </motion.p>
              )}
              {touchedFields.message && !errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-success"
                >
                  <FaCheck className="text-xs" />
                  Looks good!
                </motion.p>
              )}
            </AnimatePresence>
            <span className={`char-counter ${messageLength >= 15 ? 'valid' : ''}`}>
              {messageLength}/500
            </span>
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="btn btn-primary w-full"
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <FaSpinner className="animate-spin" />
                Sending...
              </motion.div>
            ) : (
              <motion.div
                key="submit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                Send Message
                <FaPaperPlane />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
