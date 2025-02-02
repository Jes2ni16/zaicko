'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


interface ImageGalleryProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  height: '90vh',
  bgcolor: 'transparent',
  boxShadow: 24,
  p: 0,
  outline: 'none',
};

const closeButtonStyle = {
  position: 'absolute',
  right: 8,
  top: 8,
  zIndex: 1500,
  color: 'white',
  bgcolor: 'rgba(0, 0, 0, 0.4)',
  '&:hover': {
    bgcolor: 'rgba(0, 0, 0, 0.6)',
  },
};

export function ImageGallery({ src, alt, width, height, className, priority }: ImageGalleryProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.stopPropagation();
    setOpen(false);
  };

  // Handle backdrop click
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onClick={handleOpen}
        style={{ cursor: 'pointer' }}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        onClick={handleBackdropClick}
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box 
          sx={modalStyle}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
        >
          <IconButton
            onClick={handleClose}
            sx={closeButtonStyle}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              style={{
                objectFit: 'contain',
              }}
              quality={100}
              priority
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
}