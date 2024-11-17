'use client';
import React, { useState, useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing left and right arrow icons
import styles from './ImageGallary.module.scss';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); // Mouse position
  const [zooming, setZooming] = useState(false); // State to track zooming status
  const imageRef = useRef<HTMLImageElement>(null); // Ref to the image for zooming effect
  const zoomRef = useRef<HTMLDivElement>(null); // Ref to zoomed container

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageRef.current) {
      const { top, left, width, height } =
        imageRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      setMousePos({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setZooming(true);
  };

  const handleMouseLeave = () => {
    setZooming(false);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageContainer}>
        <button onClick={handlePrev} className={styles.navButtonPrev}>
          <AiOutlineLeft size={30} />
        </button>
        <div
          className={styles.mainImage}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={imageRef}
        >
          <img ref={imageRef} src={images[currentImageIndex]} alt='Product' />
          {zooming && (
            <div
              className={styles.zoomPanel}
              style={{
                position: 'absolute',
                left: `${mousePos.x + 40}px`, // Position the zoom area near the mouse
                // top: `${mousePos.y + 50}px`, // Position the zoom area near the mouse
                zIndex: '300',
              }}
            >
              <img
                src={images[currentImageIndex]}
                alt='Zoomed'
                style={{
                  transform: `scale(4)`, // Zoom in the image
                  transformOrigin: `${
                    (mousePos.x / imageRef.current?.clientWidth) * 100
                  }% ${(mousePos.y / imageRef.current?.clientHeight) * 100}%`,
                  width: '200px',
                  height: '200px',
                }}
              />
            </div>
          )}
        </div>
        <button onClick={handleNext} className={styles.navButtonNext}>
          <AiOutlineRight size={30} />
        </button>
      </div>

      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setCurrentImageIndex(index)}
            className={currentImageIndex === index ? styles.active : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
