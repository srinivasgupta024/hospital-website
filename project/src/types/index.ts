export interface NavItem {
  name: string;
  href: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

export interface DashboardProps {
  title: string;
  description: string;
  embedUrl: string;
  id?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}