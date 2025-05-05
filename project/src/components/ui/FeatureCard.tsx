import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCardProps } from '../../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="card hover:shadow-elevated transition-shadow duration-300"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4 text-primary-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-neutral-800">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;