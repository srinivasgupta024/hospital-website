import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ActivitySquare, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavItem } from '../../types';
import { useScrollProgress } from '../../utils/animation';

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Dashboards', href: '#dashboards' },
  { name: 'About', href: '#about' },
  { name: 'Resources', href: '#resources' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-subtle py-3' : 'bg-transparent py-5'
    }`}>
      <div className="progress-bar fixed top-0 left-0 right-0 h-1 bg-primary-500" 
           style={{ width: `${scrollProgress}%`, zIndex: 100 }} />
      
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary-700">
          <ActivitySquare size={28} strokeWidth={2} />
          <span className="font-display font-semibold text-xl">HealthPriceIQ</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button className="btn btn-primary">
            Get Started
          </button>
        </nav>
        
        <button 
          className="md:hidden text-neutral-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-white z-50 md:hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end p-6">
            <button 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} className="text-neutral-700" />
            </button>
          </div>
          
          <nav className="flex flex-col items-center space-y-6 mt-10">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-xl font-medium text-neutral-800 hover:text-primary-600"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
            <button className="btn btn-primary mt-4 w-40">
              Get Started
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;