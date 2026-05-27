'use client';

import { useEffect, useRef, useState } from 'react';

interface NumberCounterProps {
  value: string | number;
  duration?: number;
}

export function NumberCounter({ value, duration = 2000 }: NumberCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasAnimated = useRef(false);

  // Extract numeric value from strings like "100%" or "100"
  const numericValue = typeof value === 'string' 
    ? parseInt(value.replace(/[^\d]/g, ''), 10) 
    : value;

  const suffix = typeof value === 'string' && value.includes('%') ? '%' : '';

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let current = 0;
    const increment = numericValue / (duration / 16); // 16ms ≈ 60fps

    intervalRef.current = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(numericValue);
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, 16);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [numericValue, duration]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}
