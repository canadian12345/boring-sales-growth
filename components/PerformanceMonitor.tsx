"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (command: string, event: string, params: Record<string, unknown>) => void;
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Report Core Web Vitals
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const webVitalEntry = entry as PerformanceEntry & { 
              value?: number; 
              delta?: number; 
              id?: string;
            };
            // Log to console in development
            if (process.env.NODE_ENV === 'development') {
              console.log(`${webVitalEntry.name}: ${webVitalEntry.value}ms`);
            }
            
            // Send to analytics in production
            if (window.gtag && webVitalEntry.value) {
              window.gtag('event', webVitalEntry.name, {
                value: Math.round(webVitalEntry.value),
                metric_id: webVitalEntry.id,
                metric_value: webVitalEntry.value,
                metric_delta: webVitalEntry.delta,
              });
            }
          }
        });

        // Observe all Core Web Vitals
        observer.observe({ entryTypes: ['web-vital'] });

        return () => observer.disconnect();
      } catch {
        // PerformanceObserver not supported
      }
    }
  }, []);

  return null;
}