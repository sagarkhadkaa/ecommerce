'use client';
import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing left and right arrow icons
import styles from './ImageGallary.module.scss';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <button onClick={handlePrev} className={styles.navButtonPrev}>
          <AiOutlineLeft size={30} />
        </button>
        <img src={images[currentImageIndex]} alt='Product' />
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
