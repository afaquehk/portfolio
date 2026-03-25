import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const contactEmail = 'afaquehayat1504@gmail.com';
const formEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setIsSuccess(false);

    const submissionData = new FormData();
    submissionData.append('name', formData.name);
    submissionData.append('email', formData.email);
    submissionData.append('message', formData.message);
    submissionData.append('_subject', `New portfolio message from ${formData.name}`);
    submissionData.append('_replyto', formData.email);
    submissionData.append('_template', 'table');
    submissionData.append('_captcha', 'false');
    submissionData.append('_honey', '');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: submissionData,
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Unable to send your message right now.');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(
        error.message || `Message could not be sent. Please email me directly at ${contactEmail}.`
      );
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubmitError('');
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'afaquehayat1504@gmail.com', href: 'mailto:afaquehayat1504@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 70011 94776', href: 'tel:+917001194776' },
    { icon: MapPin, label: 'Location', value: 'Punjab, India', href: '#' },
    { icon: Calendar, label: 'Availability', value: 'Open to data science and analytics opportunities', href: 'https://www.linkedin.com/in/afaque-hayat-khan/' },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
          badge="Contact"
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Let's connect.</h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
                I'm looking for entry-level data science, analytics, and business intelligence opportunities where I can contribute with Python, SQL-style querying, dashboards, and machine learning fundamentals. If you'd like to discuss an opportunity or collaboration, I'd be glad to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 dark:text-cyan-400 dark:group-hover:bg-cyan-500 dark:group-hover:text-[#0a0a0f]">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 group-hover:text-indigo-600 transition-colors uppercase tracking-wider mb-1 dark:text-gray-400 dark:group-hover:text-cyan-400">
                      {info.label}
                    </h4>
                    <p className="text-lg text-slate-900 dark:text-white font-medium group-hover:text-indigo-700 dark:group-hover:text-cyan-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="glass p-6 rounded-2xl mt-4 border-l-4 border-l-indigo-600 dark:border-l-cyan-500">
              <h4 className="text-slate-900 dark:text-white font-bold mb-2">Current Focus</h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm">
                Python, SQL with MySQL, data cleaning, exploratory analysis, machine learning fundamentals, and dashboard-driven storytelling.
              </p>
            </div>

            <div className="pt-4 flex gap-4">
              <a href="https://github.com/afaquehk" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:border-indigo-600 hover:text-indigo-600 hover:shadow-[0_0_15px_rgba(79,70,229,0.16)] transition-all dark:hover:border-cyan-500 dark:hover:text-cyan-400 dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/afaque-hayat-khan/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:border-indigo-600 hover:text-indigo-600 hover:shadow-[0_0_15px_rgba(79,70,229,0.16)] transition-all dark:hover:border-cyan-500 dark:hover:text-cyan-400 dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Linkedin size={20} />
              </a>
              <a href="mailto:afaquehayat1504@gmail.com" className="p-3 glass rounded-full hover:border-indigo-600 hover:text-indigo-600 hover:shadow-[0_0_15px_rgba(79,70,229,0.16)] transition-all dark:hover:border-cyan-500 dark:hover:text-cyan-400 dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden h-full">
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-slate-50/95 dark:bg-[#0a0a0f]/95 backdrop-blur-md z-10 flex flex-col items-center justify-center text-center p-8 rounded-3xl"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                    <Send size={32} className="ml-1 -mt-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-gray-400">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                </motion.div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-gray-300 ml-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:focus:ring-cyan-500/50 focus:border-indigo-500 dark:focus:border-cyan-500 transition-all font-medium"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-gray-300 ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:focus:ring-cyan-500/50 focus:border-indigo-500 dark:focus:border-cyan-500 transition-all font-medium"
                />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-gray-300 ml-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:focus:ring-cyan-500/50 focus:border-indigo-500 dark:focus:border-cyan-500 transition-all resize-none font-medium h-full min-h-[150px]"
                ></textarea>
              </div>

              {submitError && (
                <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-300">
                  {submitError}
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-2 bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-[#0a0a0f] font-bold rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.2)] dark:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-white border-t-transparent dark:border-[#0a0a0f] dark:border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
