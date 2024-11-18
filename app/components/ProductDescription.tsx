// 'use client';

// import React, { useState, useEffect } from 'react';
// import styles from './ProductDescription.module.scss';

// const descriptions = [
//   'This is a high-quality product that ensures durability and style, designed for modern living.',
//   'Made from the finest materials, this product combines functionality with elegant design.',
//   'Upgrade your space with this versatile product that blends seamlessly with any décor.',
//   'Experience the perfect combination of comfort and luxury with this premium product.',
//   'A must-have for anyone looking for innovation and quality in their everyday life.',
//   'This unique product provides the perfect balance of performance and aesthetics.',
// ];

// const ProductDescription: React.FC = () => {
//   const [description, setDescription] = useState<string>('');

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * descriptions.length);
//     setDescription(descriptions[randomIndex]);
//   }, []);

//   const handleAddToCart = () => {
//     alert('Product added to cart!');
//   };

//   return (
//     <div className={styles.productDescription}>
//       <h2>Product Description</h2>
//       <p>{description || 'Loading description...'}</p>{' '}
//       <button className={styles.addToCartBtn} onClick={handleAddToCart}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductDescription;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// const descriptions = [
//   'This is a high-quality product that ensures durability and style, designed for modern living.',
//   'Made from the finest materials, this product combines functionality with elegant design.',
//   'Upgrade your space with this versatile product that blends seamlessly with any décor.',
//   'Experience the perfect combination of comfort and luxury with this premium product.',
//   'A must-have for anyone looking for innovation and quality in their everyday life.',
//   'This unique product provides the perfect balance of performance and aesthetics.',
// ];

// // Styled component for the button
// const AddToCartButton = styled.button`
//   padding: 12px 20px;
//   background-color: #ff6f61;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #ff3b2a;
//   }
// `;

// const ProductDescription: React.FC = () => {
//   const [description, setDescription] = useState<string>('');

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * descriptions.length);
//     setDescription(descriptions[randomIndex]);
//   }, []);

//   const handleAddToCart = () => {
//     alert('Product added to cart!');
//   };

//   return (
//     <div>
//       <h2>Product Description</h2>
//       <p>{description || 'Loading description...'}</p>
//       <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
//     </div>
//   );
// };

// export default ProductDescription;

'use client';

import React from 'react';
import styled from 'styled-components';

// Styled component for the button
const AddToCartButton = styled.button`
  padding: 12px 20px;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff3b2a;
  }
`;

const ProductDescription: React.FC = () => {
  const staticDescription =
    'This is a high-quality product that ensures durability and style, designed for modern living.';

  const handleAddToCart = () => {
    alert('Product added to cart!');
  };

  return (
    <div>
      <h2>Product Description</h2>
      <p>{staticDescription}</p>
      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
    </div>
  );
};

export default ProductDescription;
