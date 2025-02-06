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
}

const FullImage: React.FC<FullImageProps> = ({ src, alt, className,   width = 300, 
  height = 250   }) => {
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

  return (
    <div>
      {/* The Image that triggers the modal */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
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
          }}
          onClick={handleClose}
        >
          <div style={{ position: 'relative' }}>
            <button
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: -60,
                right: 0,
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
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '95vw',
                  maxHeight: '95vh',
                  objectFit: 'contain',
                }}
                quality={100}
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
