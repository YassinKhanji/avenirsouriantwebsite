'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface NumberCounterProps {
  value: string | number;
  duration?: number;
}

export function NumberCounter({ value, duration = 5500 }: NumberCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  // Extract numeric value from strings like "100%" or "100"
  const numericValue = typeof value === 'string' 
    ? parseInt(value.replace(/[^\d]/g, ''), 10) 
    : value;

  const suffix = typeof value === 'string' && value.includes('%') ? '%' : '';

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth ease-out quad curve for natural deceleration
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      
      setDisplayValue(Math.floor(easeProgress * numericValue));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(numericValue);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}
