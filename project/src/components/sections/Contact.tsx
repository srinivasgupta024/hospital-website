import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';
import Section from '../layout/Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-neutral-50">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <MessageSquare size={28} className="text-primary-600 mr-3" />
            <h2 className="text-3xl font-bold text-neutral-900">Get in Touch</h2>
          </div>
          
          <p className="text-lg text-neutral-700 mb-6">
            Have questions about our hospital price transparency platform? Want to learn more about how our data can help your organization? Get in touch with our team.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-subtle">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-24 font-medium text-neutral-700">Email:</span>
                <a href="mailto:info@healthpriceiq.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                  info@healthpriceiq.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium text-neutral-700">Phone:</span>
                <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium text-neutral-700">Address:</span>
                <span className="text-neutral-700">
                  123 Healthcare Blvd,<br />
                  Medical City, CA 90210
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card">
            <h3 className="text-2xl font-semibold mb-6 text-neutral-800">Send us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Message subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="btn btn-primary py-3 px-6 rounded-lg w-full md:w-auto"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;