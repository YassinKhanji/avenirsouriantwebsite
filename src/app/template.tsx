'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-[100] bg-primary flex items-center justify-center pointer-events-none"
        initial={{ y: '100%' }}
        animate={{ y: ['100%', '0%', '0%', '-100%'] }}
        transition={{ duration: 1.5, times: [0, 0.4, 0.6, 1], ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Image
            src="/images/logo.png"
            alt="Avenir Souriant Logo"
            width={300}
            height={100}
            className="brightness-0 invert object-contain"
            priority
          />
        </motion.div>
      </motion.div>
      {children}
    </>
  );
}
