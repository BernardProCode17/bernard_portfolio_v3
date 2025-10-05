/**
 * Responsive image size helper utilities
 */

/**
 * Generate responsive image sizes string for Next.js Image component
 * @param mobile - Mobile size (default: 100vw)
 * @param tablet - Tablet size (default: 50vw)
 * @param desktop - Desktop size (default: 33vw)
 * @param breakpoints - Custom breakpoints (default: { mobile: 640, tablet: 1024 })
 * @returns Sizes string for Next.js Image component
 */
export const responsiveSizes = (
  mobile = '100vw',
  tablet = '50vw',
  desktop = '33vw',
  breakpoints = { mobile: 640, tablet: 1024 }
): string => {
  return `(max-width: ${breakpoints.mobile}px) ${mobile}, (max-width: ${breakpoints.tablet}px) ${tablet}, ${desktop}`;
};

/**
 * Calculate width and height maintaining aspect ratio
 * @param originalWidth - Original width
 * @param originalHeight - Original height
 * @param targetWidth - Target width
 * @returns Object with width and height
 */
export const maintainAspectRatio = (
  originalWidth: number,
  originalHeight: number,
  targetWidth: number
): { width: number; height: number } => {
  const aspectRatio = originalWidth / originalHeight;
  const height = Math.round(targetWidth / aspectRatio);
  
  return {
    width: targetWidth,
    height,
  };
};

/**
 * Generate array of image widths for srcSet
 * @param maxWidth - Maximum width
 * @param steps - Number of steps
 * @returns Array of widths
 */
export const generateImageWidths = (maxWidth = 1920, steps = 5): number[] => {
  const widths = [];
  const step = maxWidth / steps;
  
  for (let i = 1; i <= steps; i++) {
    widths.push(Math.round(i * step));
  }
  
  return widths;
};