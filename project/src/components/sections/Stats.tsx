import React from 'react';
import { motion } from 'framer-motion';
import { Building, Activity, Stethoscope, DollarSign } from 'lucide-react';
import Section from '../layout/Section';
import StatCard from '../ui/StatCard';

const Stats: React.FC = () => {
  const stats = [
    {
      title: "Hospitals",
      value: "5,000+",
      description: "Healthcare facilities analyzed across the country",
      icon: <Building size={28} />
    },
    {
      title: "Procedures",
      value: "12,000+",
      description: "Medical procedures with transparent pricing information",
      icon: <Activity size={28} />
    },
    {
      title: "Specialties",
      value: "120+",
      description: "Medical specialties covered in our comprehensive database",
      icon: <Stethoscope size={28} />
    },
    {
      title: "Cost Savings",
      value: "$2.5B",
      description: "Potential annual savings through price transparency",
      icon: <DollarSign size={28} />
    }
  ];
  
  return (
    <Section className="bg-primary-50">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-neutral-900">Hospital Price Transparency By The Numbers</h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
          Our data platform provides comprehensive insights into healthcare pricing across the United States.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StatCard
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={stat.icon}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Stats;