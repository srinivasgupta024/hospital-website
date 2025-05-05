import React from 'react';
import { motion } from 'framer-motion';
import { DashboardProps } from '../../types';

const Dashboard: React.FC<DashboardProps> = ({ title, description, embedUrl, id }) => {
  return (
    <div id={id} className="mb-16">
      <div className="text-center mb-10">
        <motion.h2 
          className="mb-4 text-neutral-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
      </div>
      
      <motion.div 
        className="dashboard-container mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <iframe 
          title={title}
          className="dashboard-iframe"
          src={embedUrl}
          frameBorder="0" 
          allowFullScreen={true}
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Dashboard;