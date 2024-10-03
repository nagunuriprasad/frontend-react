import React from 'react';
import './assets/css/HomePage.css';
import image1 from './assets/bp-image1.jpg';
import image2 from './assets/bp-image2.jpg';
import image3 from './assets/bp-image3.jpg';
import image4 from './assets/bp-image4.jpg';
import image5 from './assets/bp-image5.jpg';
import image6 from './assets/bp-image6.jpg';

const images = [image1, image2, image3, image4, image5, image6];

const CarouselComponent = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {/* Displaying images for the marquee */}
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`carousel ${index}`} 
            className="marquee-image" 
          />
        ))}
        {/* Repeat the images for a seamless loop */}
        {images.map((image, index) => (
          <img 
            key={index + images.length} 
            src={image} 
            alt={`carousel duplicate ${index}`} 
            className="marquee-image" 
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
