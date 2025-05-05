import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Section from '../layout/Section';

const About: React.FC = () => {
  const benefits = [
    "Empowering consumers with transparent pricing information",
    "Helping patients make informed healthcare decisions",
    "Promoting fair pricing practices in healthcare",
    "Reducing surprise medical bills through education",
    "Supporting healthcare policy improvements with data"
  ];
  
  return (
    <Section id="about" className="bg-neutral-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary-200 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <div className="relative bg-white rounded-2xl shadow-card overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Healthcare professionals analyzing data" 
                className="w-full h-[300px] object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-neutral-800">Our Mission</h3>
                <p className="text-neutral-700">
                  We believe that healthcare pricing should be transparent and accessible to everyone. 
                  Our mission is to democratize access to this critical information, enabling patients 
                  to make informed decisions about their healthcare.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-neutral-900">About Our Platform</h2>
          <p className="text-lg text-neutral-700 mb-6">
            HealthPriceIQ is dedicated to bringing transparency to healthcare pricing through 
            advanced data analytics and visualization. We transform complex pricing data into 
            accessible, actionable insights for patients, providers, and policymakers.
          </p>
          
          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <CheckCircle size={22} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">{benefit}</span>
              </motion.li>
            ))}
          </ul>
          
          <a href="#dashboards" className="btn btn-primary py-3 px-6 rounded-lg">
            Explore Our Dashboards
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;