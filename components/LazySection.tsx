"use client";

import { useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export default function LazySection({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={sectionRef}
      className={`transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {isVisible ? children : <div style={{ minHeight: '200px' }} />}
    </div>
  );
}