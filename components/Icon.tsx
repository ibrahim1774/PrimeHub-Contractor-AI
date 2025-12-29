
import React from 'react';
import * as Icons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  // Convert dash-case to PascalCase for Lucide icons
  const pascalName = name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('') as keyof typeof Icons;

  const LucideIcon = (Icons[pascalName] as any) || Icons.HelpCircle;
  
  return <LucideIcon className={className} size={size} />;
};

export default Icon;
