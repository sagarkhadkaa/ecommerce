'use client';

import ImageGallery from './components/ImageGallery';
import Navbar from './components/Navbar';

const images = [
  '/images/image4.jpg',
  '/images/image3.jpg',
  '/images/image2.jpg',
  '/images/image1.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
];

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <h1>Product Gallery</h1>
        <ImageGallery images={images} />
      </div>
    </div>
  );
}
