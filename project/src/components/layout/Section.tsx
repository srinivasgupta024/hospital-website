import React from 'react';
import { SectionProps } from '../../types';
import { useAnimateOnScroll } from '../../utils/animation';

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  const ref = useAnimateOnScroll<HTMLElement>();
  
  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${className || ''}`}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;