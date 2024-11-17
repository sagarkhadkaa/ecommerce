'use client';
import React, { useState } from 'react';
// import styles from './ImageGallery.module.scss';
import styles from './ImageGallary.module.scss';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <img src={currentImage} alt='Product' />
      </div>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setCurrentImage(image)}
            className={currentImage === image ? styles.active : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
