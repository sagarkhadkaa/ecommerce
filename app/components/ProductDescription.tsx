'use client';

import React from 'react';
import styled from 'styled-components';

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
