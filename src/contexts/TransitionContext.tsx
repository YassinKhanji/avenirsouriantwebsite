'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface TransitionContextType {
  startTransition: () => Promise<void>;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // When the pathname changes, we want to slide the overlay OUT
    if (isTransitioning) {
      setIsTransitioning(false);
    }
  }, [pathname]);

  const startTransition = async () => {
    setIsTransitioning(true);
    // Wait for slide-in animation to complete
    await new Promise(resolve => setTimeout(resolve, 600)); 
  };

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Image 
                src="/images/logo.png" 
                alt="Avenir Souriant Logo" 
                width={250} 
                height={80} 
                className="brightness-0 invert object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
}
