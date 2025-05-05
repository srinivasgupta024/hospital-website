import React from 'react';
import Section from '../layout/Section';
import Dashboard from '../ui/Dashboard';

const Dashboards: React.FC = () => {
  return (
    <Section id="dashboards" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="mb-4 text-neutral-900">Interactive Dashboards</h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
          Explore our comprehensive hospital price transparency dashboards, designed to make healthcare pricing data accessible and actionable.
        </p>
      </div>
      
      <Dashboard
        title="Price Comparison Dashboard"
        description="Compare hospital pricing across different procedures, insurance types, and regions."
        embedUrl="https://app.powerbi.com/view?r=eyJrIjoiNDRiMzU3ZmQtYWU3ZC00ZjQ3LWJiODctYzNjYTE3NmViMDdjIiwidCI6IjhkMjgxZDFkLTljNGQtNGJmNy1iMTZlLTAzMmQxNWRlOWY2YyIsImMiOjN9&pageName=797b97f330a0069ca176"
      />
      
      {/* Placeholder for additional dashboards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card flex flex-col items-center text-center py-16 bg-neutral-50 border-2 border-dashed border-neutral-200">
          <h3 className="text-xl font-medium text-neutral-600 mb-2">Regional Pricing Analysis</h3>
          <p className="text-neutral-500">Coming Soon</p>
        </div>
        
        <div className="card flex flex-col items-center text-center py-16 bg-neutral-50 border-2 border-dashed border-neutral-200">
          <h3 className="text-xl font-medium text-neutral-600 mb-2">Insurance Coverage Insights</h3>
          <p className="text-neutral-500">Coming Soon</p>
        </div>
      </div>
    </Section>
  );
};

export default Dashboards;