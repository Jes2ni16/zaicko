'use client';


import { useState, useEffect } from 'react';

import Image from 'next/image'; // Import the Image component from Next.js

// Define the props interface for the component
interface FullImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;  
  height?: number;
  sizes?:string;
}

const FullImage: React.FC<FullImageProps> = ({ 
  src, 
  alt, 
  className, 
  width = 300, 
  height = 250 ,
  sizes
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
  
    useEffect(() => {
      const preloadImage = new window.Image();
    preloadImage.src = src; 
    setIsMounted(true);
    }, [src]);
  // Handle closing the modal
  const handleClose = () => setIsOpen(false);

  // Handle opening the modal
  const handleOpen = () => setIsOpen(true);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Close modal only if background is clicked (not modal content)
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* The Image that triggers the modal */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        onClick={handleOpen} // Open the modal on click
        style={{ cursor: 'pointer' }}
      />

{isMounted && isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }} onClick={handleBackgroundClick} 
        >
          <div style={{ position: 'relative' }}  onClick={(e) => e.stopPropagation()} >
            <button
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: -30,
                right: 20,
                background: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              <Image
                src={src}
                alt={alt}
                width={1920}
                height={1080}
                quality={100}
                style={{
                  maxWidth: '95%',
                  maxHeight: '95vh',
                  height: 'auto',
                  margin:'auto',
                  display:'flex',
                  objectFit: 'contain',
                }}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullImage;
