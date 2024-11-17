'use client';
import React, { useState, useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Image from 'next/image';
import styles from './ImageGallary.module.scss';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [zooming, setZooming] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null);
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
      const { top, left } = imageRef.current.getBoundingClientRect();
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
          <Image
            src={images[currentImageIndex]}
            alt='Product'
            layout='intrinsic'
            width={600}
            height={600}
          />
        </div>
        <button onClick={handleNext} className={styles.navButtonNext}>
          <AiOutlineRight size={30} />
        </button>
      </div>

      {zooming && imageRef.current && (
        <div
          className={styles.zoomPanel}
          style={{
            position: 'absolute',
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            zIndex: '300',
          }}
        >
          <Image
            src={images[currentImageIndex]}
            alt='Zoomed'
            layout='intrinsic'
            width={200}
            height={200}
            style={{
              transform: `scale(5)`,
              transformOrigin: `${
                (mousePos.x / imageRef.current.clientWidth) * 100
              }% ${(mousePos.y / imageRef.current.clientHeight) * 100}%`,
            }}
          />
        </div>
      )}

      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <div key={index} className={styles.thumbnailWrapper}>
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => setCurrentImageIndex(index)}
              width={100}
              height={100}
              className={currentImageIndex === index ? styles.active : ''}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
