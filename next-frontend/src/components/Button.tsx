import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // We'll create this utility

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95";
    
    const variants = {
      primary: "bg-primary text-navy hover:bg-primary-hover shadow-md",
      secondary: "bg-secondary text-white hover:bg-secondary-hover shadow-md",
      outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
      ghost: "text-navy hover:text-secondary hover:bg-gray-100",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
