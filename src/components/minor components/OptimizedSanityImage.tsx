'use client';

import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useState, useEffect } from 'react';

interface OptimizedSanityImageProps {
  imageRef: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export default function OptimizedSanityImage({
  imageRef,
  alt,
  width = 800,
  height,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px',
  className = '',
  priority = false,
  quality = 80,
}: OptimizedSanityImageProps) {
  const [src, setSrc] = useState<string>('');
  const [blurDataURL, setBlurDataURL] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  // Generate image URLs with proper dimensions
  useEffect(() => {
    if (!imageRef) return;
    
    // Generate optimized image URL
    const imageUrl = urlFor(imageRef)
      .width(width)
      .auto('format')
      .quality(quality)
      .url();
      
    // Generate low-quality placeholder
    const placeholderUrl = urlFor(imageRef)
      .width(20)
      .blur(10)
      .quality(20)
      .url();
      
    setSrc(imageUrl);
    setBlurDataURL(placeholderUrl);
  }, [imageRef, width, quality]);
  
  if (!src) {
    return (
      <div 
        className={`image-placeholder ${className}`} 
        style={{ 
          width: width, 
          height: height || 'auto',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
        }}
      />
    );
  }

  return (
    <div className={`optimized-sanity-image-container ${className}`}>
      <Image
        src={src}
        alt={alt || 'Image'}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        quality={quality}
        loading={priority ? 'eager' : 'lazy'}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        className={`optimized-sanity-image ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          transition: 'opacity 0.3s ease-in-out',
          objectFit: 'cover',
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}