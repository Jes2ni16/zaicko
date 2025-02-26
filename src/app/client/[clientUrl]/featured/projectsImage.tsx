'use client';
import { useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import styles from './page.module.css';

interface Image {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleOpen = (image: Image, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <>
      {/* Image Container */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent:'center'}}className={styles.imgContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleOpen(image, index)}
            style={{ cursor: 'pointer', width: 'auto', height: 'auto' }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Dialog */}
      {selectedImage && currentIndex !== null && (
        <Dialog
          open={open}
          onClose={handleClose}
          fullScreen
          PaperProps={{
            style: { backgroundColor: 'rgba(0, 0, 0, 0.9)', boxShadow: 'none' },
          }}
        >
          <DialogContent style={{   position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', }}>
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: '16px', 
                right: '16px', 
                zIndex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                borderRadius: '50%', 
                padding: '8px',
              }}
            >
              <CloseIcon style={{ color: 'white' }}/>
            </IconButton>

            {/* Next Button */}
            <IconButton
  onClick={handlePrevious}
  style={{
    position: 'absolute',
    top: '50%',
    left: 10,
    transform: 'translateY(-50%)',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    borderRadius: '50%', 
    padding: '10px', 
    fontSize: '24px', 
  }}
>
  <ArrowBackIcon style={{ fontSize: '32px' }} /> {/* Increase the icon size */}
</IconButton>

            {/* Full-Screen Image */}
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={600} // Larger width for fullscreen view
              height={600} // Larger height for fullscreen view
              style={{
                width: '100%', 
                maxWidth: '900px',
                maxHeight:'900px',
                height: 'auto',
                objectFit: 'contain',
              }}
            />

            {/* Previous Button */}
            <IconButton
  onClick={handleNext}
  style={{
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: 'translateY(-50%)',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    borderRadius: '50%', 
    padding: '10px', 
    fontSize: '24px', 
  }}
>
  <ArrowForwardIcon style={{ fontSize: '32px' }} /> 
</IconButton>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ImageGallery;
