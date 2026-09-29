import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  id 
}) => {
  return (
    <div 
      id={id}
      className={`w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
};
