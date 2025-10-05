'use client';

import React from 'react';
import { IconType } from 'react-icons';

// Dynamic icon loading with code splitting
type IconProps = {
  icon: string;
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

// Cache for loaded icon components
const iconCache: Record<string, IconType> = {};

export default function DynamicIcon({ 
  icon, 
  size = 24, 
  color, 
  className = '', 
  style = {} 
}: IconProps) {
  const [IconComponent, setIconComponent] = React.useState<IconType | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!icon) return;
    
    // Parse icon name format: "fa/FaGithub", "ai/AiFillGithub", etc.
    const [library, iconName] = icon.split('/');
    
    if (!library || !iconName) {
      console.error(`Invalid icon format: ${icon}. Expected format: "library/IconName"`);
      setIsLoading(false);
      return;
    }
    
    // Cache icon components to avoid re-loading
    const cacheKey = `${library}-${iconName}`;
    
    if (iconCache[cacheKey]) {
      setIconComponent(iconCache[cacheKey]);
      setIsLoading(false);
      return;
    }
    
    // Dynamically import the icon from the library
    const importIcon = async () => {
      try {
        let importedIcon: IconType | null = null;
        
        switch (library.toLowerCase()) {
          case 'fa':
            importedIcon = (await import('react-icons/fa'))[iconName] as IconType;
            break;
          case 'ai':
            importedIcon = (await import('react-icons/ai'))[iconName] as IconType;
            break;
          case 'bi':
            importedIcon = (await import('react-icons/bi'))[iconName] as IconType;
            break;
          case 'fi':
            importedIcon = (await import('react-icons/fi'))[iconName] as IconType;
            break;
          case 'md':
            importedIcon = (await import('react-icons/md'))[iconName] as IconType;
            break;
          case 'io':
            importedIcon = (await import('react-icons/io'))[iconName] as IconType;
            break;
          case 'io5':
            importedIcon = (await import('react-icons/io5'))[iconName] as IconType;
            break;
          default:
            console.error(`Unsupported icon library: ${library}`);
            break;
        }
        
        if (importedIcon) {
          iconCache[cacheKey] = importedIcon;
          setIconComponent(importedIcon);
        }
      } catch (error) {
        console.error(`Failed to load icon ${icon}:`, error);
      } finally {
        setIsLoading(false);
      }
    };
    
    importIcon();
  }, [icon]);
  
  if (isLoading) {
    // Show a simple loading placeholder matching the size
    return (
      <div 
        style={{ 
          width: size, 
          height: size, 
          display: 'inline-block',
          backgroundColor: '#f0f0f0',
          borderRadius: '3px',
          ...style 
        }}
        className={className}
        aria-hidden="true"
      />
    );
  }
  
  if (!IconComponent) {
    // Fallback for failed icon load
    return null;
  }
  
  return <IconComponent size={size} color={color} className={className} style={style} />;
}