"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.5,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const endValue = value;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Ease-out curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * endValue);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
