import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-secondary-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-accent-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center px-3 py-1 mb-6 border border-primary-200 rounded-full bg-primary-50 text-primary-800 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="flex h-2 w-2 mr-2">
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Healthcare Price Transparency
            </motion.div>
            
            <motion.h1 
              className="mb-6 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Making Healthcare <span className="text-primary-600">Pricing</span> Clear & Accessible
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral-700 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore interactive dashboards that illuminate hospital pricing data, 
              empowering you to make informed healthcare decisions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a 
                href="#dashboards"
                className="btn btn-primary py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <BarChart3 size={20} className="mr-2" />
                View Dashboards
              </a>
              <a 
                href="#about"
                className="btn btn-secondary py-3 px-6 rounded-lg"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-2xl transform rotate-3"></div>
              <div className="card p-0 overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-primary-700 text-white p-4">
                  <h3 className="font-semibold">Hospital Price Dashboard</h3>
                </div>
                <div className="bg-neutral-100 p-4">
                  <div className="bg-white p-3 rounded-lg mb-3">
                    <div className="h-6 w-3/4 bg-neutral-200 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-neutral-200 rounded"></div>
                  </div>
                  <div className="bg-white p-3 rounded-lg mb-3">
                    <div className="h-20 bg-neutral-200 rounded mb-2"></div>
                    <div className="h-4 w-1/3 bg-neutral-200 rounded"></div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex gap-2 mb-2">
                      <div className="h-8 w-8 bg-primary-200 rounded-full"></div>
                      <div className="h-8 w-8 bg-secondary-200 rounded-full"></div>
                      <div className="h-8 w-8 bg-accent-200 rounded-full"></div>
                    </div>
                    <div className="h-4 w-2/3 bg-neutral-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center hidden md:block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#features" className="text-neutral-500 hover:text-primary-600 transition-colors">
            <span className="block text-sm font-medium mb-2">Scroll to Explore</span>
            <ArrowDown size={20} className="mx-auto" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;