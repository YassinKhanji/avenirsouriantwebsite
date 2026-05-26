'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useTransition } from '@/contexts/TransitionContext';

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export function TransitionLink({ children, href, className, onClick, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { startTransition } = useTransition();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      onClick(e);
    }

    if (pathname === href) {
      // If we are already on this page, do not trigger a transition
      return;
    }

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
