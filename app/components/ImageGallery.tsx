// 'use client';
// import React, { useState, useRef } from 'react';
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// import Image from 'next/image';
// import styles from './ImageGallary.module.scss';

// interface ImageGalleryProps {
//   images: string[];
// }

// const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [zooming, setZooming] = useState(false);
//   const imageRef = useRef<HTMLDivElement | null>(null);
//   const handlePrev = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (imageRef.current) {
//       const { top, left } = imageRef.current.getBoundingClientRect();
//       const x = e.clientX - left;
//       const y = e.clientY - top;
//       setMousePos({ x, y });
//     }
//   };

//   const handleMouseEnter = () => {
//     setZooming(true);
//   };

//   const handleMouseLeave = () => {
//     setZooming(false);
//   };

//   return (
//     <div className={styles.gallery}>
//       <div className={styles.mainImageContainer}>
//         <button onClick={handlePrev} className={styles.navButtonPrev}>
//           <AiOutlineLeft size={30} />
//         </button>
//         <div
//           className={styles.mainImage}
//           onMouseMove={handleMouseMove}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           ref={imageRef}
//         >
//           <Image
//             src={images[currentImageIndex]}
//             alt='Product'
//             layout='intrinsic'
//             width={600}
//             height={600}
//           />
//         </div>
//         <button onClick={handleNext} className={styles.navButtonNext}>
//           <AiOutlineRight size={30} />
//         </button>
//       </div>

//       {zooming && imageRef.current && (
//         <div
//           className={styles.zoomPanel}
//           style={{
//             position: 'absolute',
//             left: `${mousePos.x}px`,
//             top: `${mousePos.y}px`,
//             zIndex: '300',
//           }}
//         >
//           <Image
//             src={images[currentImageIndex]}
//             alt='Zoomed'
//             layout='intrinsic'
//             width={200}
//             height={200}
//             style={{
//               transform: `scale(5)`,
//               transformOrigin: `${
//                 (mousePos.x / imageRef.current.clientWidth) * 100
//               }% ${(mousePos.y / imageRef.current.clientHeight) * 100}%`,
//             }}
//           />
//         </div>
//       )}

//       <div className={styles.thumbnails}>
//         {images.map((image, index) => (
//           <div key={index} className={styles.thumbnailWrapper}>
//             <Image
//               src={image}
//               alt={`Thumbnail ${index}`}
//               onClick={() => setCurrentImageIndex(index)}
//               width={100}
//               height={100}
//               className={currentImageIndex === index ? styles.active : ''}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;

'use client';
import React, { useState, useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Image from 'next/image';
import styled from 'styled-components';

interface ImageGalleryProps {
  images: string[];
}

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    transition: transform 0.3s ease;
    cursor: zoom-in;
  }
`;

const ZoomPanel = styled.div<{ x: number; y: number }>`
  position: absolute;
  pointer-events: none;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 9999;
  display: block;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
`;

const NavButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  ${({ position }) => (position === 'left' ? 'left: 10px;' : 'right: 10px;')}
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 0.5rem;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border: 2px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.2s;

    &.active {
      border-color: #0070f3;
    }
  }
`;

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

  const handleMouseEnter = () => setZooming(true);
  const handleMouseLeave = () => setZooming(false);

  return (
    <Gallery>
      <MainImageContainer>
        <NavButton position='left' onClick={handlePrev}>
          <AiOutlineLeft size={30} />
        </NavButton>
        <MainImage
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
        </MainImage>
        <NavButton position='right' onClick={handleNext}>
          <AiOutlineRight size={30} />
        </NavButton>
      </MainImageContainer>

      {zooming && imageRef.current && (
        <ZoomPanel x={mousePos.x} y={mousePos.y}>
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
        </ZoomPanel>
      )}

      <Thumbnails>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => setCurrentImageIndex(index)}
              width={100}
              height={100}
              className={currentImageIndex === index ? 'active' : ''}
            />
          </div>
        ))}
      </Thumbnails>
    </Gallery>
  );
};

export default ImageGallery;
