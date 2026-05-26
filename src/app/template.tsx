'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
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
      {children}
    </>
  );
}
