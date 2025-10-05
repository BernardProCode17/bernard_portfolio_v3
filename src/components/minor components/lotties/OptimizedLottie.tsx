'use client';

import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

interface OptimizedLottieProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  height?: number | string;
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * OptimizedLottie - A performance-optimized Lottie component that:
 * 1. Only loads when in viewport using Intersection Observer
 * 2. Destroys animation when not in view
 * 3. Uses requestAnimationFrame for better performance
 */
export default function OptimizedLottie({
  animationData,
  loop = true,
  autoplay = true,
  height = 300,
  width = '100%',
  className = '',
  style = {},
}: OptimizedLottieProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px', // Load animation slightly before it comes into view
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsInView(entry.isIntersecting);
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only load and play animation when in view
    if (isInView && containerRef.current && !animationRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay,
        animationData,
        rendererSettings: {
          progressiveLoad: true,
          preserveAspectRatio: 'xMidYMid slice',
        },
      });

      setIsLoaded(true);
    }

    // Destroy animation when not in view to save resources
    if (!isInView && animationRef.current) {
      animationRef.current.destroy();
      animationRef.current = null;
      setIsLoaded(false);
    }

    // Cleanup on unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, [isInView, animationData, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      className={`optimized-lottie ${className}`}
      style={{
        height,
        width,
        ...style,
      }}
      aria-hidden="true"
    >
      {!isLoaded && (
        <div
          style={{
            height: '100%',
            width: '100%',
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'pulse 1.5s ease-in-out infinite',
            borderRadius: '4px',
          }}
        />
      )}
    </div>
  );
}