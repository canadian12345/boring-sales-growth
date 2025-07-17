"use client";

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  fill = false,
  sizes,
  quality = 85,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''} ${className}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes || '100vw'}
          quality={quality}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          className={`object-cover duration-300 ${
            isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'
          }`}
          onLoad={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 800}
          height={height || 600}
          quality={quality}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          className={`duration-300 ${
            isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'
          }`}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
}