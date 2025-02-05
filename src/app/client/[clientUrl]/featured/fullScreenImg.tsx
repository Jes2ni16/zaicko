'use client';

import { useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon
import Image from 'next/image'; // Import the Image component from Next.js

// Define the props interface for the component
interface FullImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FullImage: React.FC<FullImageProps> = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        width={400}
        height={300}
        className={className}
        onClick={handleOpen} // Open the modal on click
        style={{ cursor: 'pointer' }}
      />

      {/* Modal to display the image in full screen using MUI Dialog */}
      <Dialog
        open={isOpen}
        onClose={handleClose} // Close modal
        maxWidth="xl"
        fullScreen
      >
        <DialogContent
          sx={{
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Close Button positioned at the top-right */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              background: 'black', // Background to make the button stand out
              color: 'white', // Ensure the button is visible on dark backgrounds
              zIndex: 9999, // Ensure the button stays above other content
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Full screen image */}
          <Image
            src={src}
            alt={alt}
            fill
            style={{
              objectFit: 'contain', // Ensures the image is contained within the screen
            }}
            quality={100}
            priority
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FullImage;
