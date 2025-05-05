import React from 'react';
import { motion } from 'framer-motion';
import { StatCardProps } from '../../types';

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon }) => {
  return (
    <motion.div
      className="card flex flex-col items-center text-center group"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4 text-primary-500 bg-primary-50 p-3 rounded-lg group-hover:bg-primary-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-4xl font-bold text-primary-700 mb-2">{value}</h3>
      <h4 className="text-lg font-medium text-neutral-800 mb-2">{title}</h4>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

export default StatCard;