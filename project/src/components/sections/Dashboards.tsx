import React, { useEffect } from 'react';
import Section from '../layout/Section';
// import Dashboard from '../ui/Dashboard';

// Declare the custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tableau-viz': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src: string;
        width: string | number;
        height: string | number;
        'hide-tabs'?: boolean;
        toolbar?: string;
        id?: string;
      }, HTMLElement>;
    }
  }
}

// Create a type-safe wrapper component
const TableauViz: React.FC<{
  src: string;
  width?: string | number;
  height?: string | number;
  hideTabs?: boolean;
  toolbar?: string;
  id?: string;
}> = (props) => {
  return React.createElement('tableau-viz', {
    ...props,
    'hide-tabs': props.hideTabs
  });
};

const Dashboards: React.FC = () => {
  useEffect(() => {
    // Load Tableau script
    const script = document.createElement('script');
    script.src = 'https://us-east-1.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section id="dashboards" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="mb-4 text-neutral-900">Interactive Dashboards</h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
          Explore our comprehensive hospital price transparency dashboards, designed to make healthcare pricing data accessible and actionable.
        </p>
      </div>
      
      <div className="mt-16">
        <div className="card flex flex-col items-center text-center py-16 bg-neutral-50 border-2 border-dashed border-neutral-200">
          <h3 className="text-xl font-medium text-neutral-600 mb-2">Regional Pricing Analysis</h3>
          <div className="w-full h-[626px]">
            <TableauViz 
              id="tableau-viz" 
              src="https://us-east-1.online.tableau.com/t/muhammadhanzalah-eb5baf9ae1/views/FinalDashboard/FinalDashboard" 
              width="100%" 
              height={626} 
              hideTabs 
              toolbar="bottom"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Dashboards;