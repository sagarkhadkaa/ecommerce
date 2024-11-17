'use client';

import ImageGallery from './components/ImageGallery';
import Navbar from './components/Navbar';
import ProductDescription from './components/ProductDescription';

// const images = [
//   '/images/image4.jpg',
//   '/images/image3.jpg',
//   '/images/image2.jpg',
//   '/images/image1.jpg',
//   '/images/image5.jpg',
//   '/images/image6.jpg',
// ];

const isProd = process.env.NODE_ENV === 'production';

const basePath = isProd ? '/ecommerce' : '';

const images = [
  `${basePath}/images/image4.jpg`,
  `${basePath}/images/image3.jpg`,
  `${basePath}/images/image2.jpg`,
  `${basePath}/images/image1.jpg`,
  `${basePath}/images/image5.jpg`,
  `${basePath}/images/image6.jpg`,
];

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <h1>Product Gallery</h1>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <ImageGallery images={images} />
          <ProductDescription />
        </div>
      </div>
    </div>
  );
}
