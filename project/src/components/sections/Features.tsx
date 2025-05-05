import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, PieChart, LineChart, TrendingUp, Users, Lock, Database, Search } from 'lucide-react';
import Section from '../layout/Section';
import FeatureCard from '../ui/FeatureCard';

const features = [
  {
    title: "Interactive Visualizations",
    description: "Explore data through interactive charts that adjust based on your selections and filters.",
    icon: <BarChart2 size={28} />
  },
  {
    title: "Comprehensive Price Comparisons",
    description: "Compare prices for specific procedures across different hospitals and healthcare providers.",
    icon: <PieChart size={28} />
  },
  {
    title: "Trend Analysis",
    description: "View historical pricing trends and identify patterns in healthcare costs over time.",
    icon: <LineChart size={28} />
  },
  {
    title: "Data-Driven Insights",
    description: "Gain valuable insights through advanced analytics and data processing techniques.",
    icon: <TrendingUp size={28} />
  },
  {
    title: "User-Friendly Interface",
    description: "Navigate through complex data with an intuitive and easy-to-use interface designed for all users.",
    icon: <Users size={28} />
  },
  {
    title: "Secure Data Handling",
    description: "Rest assured knowing all data is handled with the highest security and privacy standards.",
    icon: <Lock size={28} />
  },
  {
    title: "Comprehensive Dataset",
    description: "Access a rich dataset covering thousands of procedures across numerous healthcare facilities.",
    icon: <Database size={28} />
  },
  {
    title: "Advanced Search Capabilities",
    description: "Quickly find the specific information you need with powerful search and filtering options.",
    icon: <Search size={28} />
  }
];

const Features: React.FC = () => {
  return (
    <Section id="features" className="bg-white">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-neutral-900">Powerful Features</h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
          Our platform provides innovative tools to help you navigate and understand healthcare pricing data.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;