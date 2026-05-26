'use client';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useTransition } from '@/contexts/TransitionContext';

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export function TransitionLink({ children, href, className, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const { startTransition } = useTransition();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    
    // Trigger transition overlay
    await startTransition();
    
    // Navigate
    router.push(href);
  };

  return (
    <Link {...props} href={href} onClick={handleTransition} className={className}>
      {children}
    </Link>
  );
}
