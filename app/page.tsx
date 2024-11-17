'use client';

import ImageGallery from './components/ImageGallery';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
];

export default function HomePage() {
  return (
    <div>
      <h1>Product Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
}
