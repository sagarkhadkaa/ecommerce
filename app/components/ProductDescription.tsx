'use client';

import React from 'react';
import styles from './ProductDescription.module.scss';

const descriptions = [
  'This is a high-quality product that ensures durability and style, designed for modern living.',
  'Made from the finest materials, this product combines functionality with elegant design.',
  'Upgrade your space with this versatile product that blends seamlessly with any décor.',
  'Experience the perfect combination of comfort and luxury with this premium product.',
  'A must-have for anyone looking for innovation and quality in their everyday life.',
  'This unique product provides the perfect balance of performance and aesthetics.',
];

const getRandomDescription = () => {
  const randomIndex = Math.floor(Math.random() * descriptions.length);
  return descriptions[randomIndex];
};

const ProductDescription: React.FC = () => {
  const handleAddToCart = () => {
    alert('Product added to cart!');
  };

  return (
    <div className={styles.productDescription}>
      <h2>Product Description</h2>
      <p>{getRandomDescription()}</p>
      <button className={styles.addToCartBtn} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDescription;
