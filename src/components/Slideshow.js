import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Slideshow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  { src: '/assets/n1.jpg', caption: 'Caption for Image 1' },
  { src: '/assets/n2.jpg', caption: 'Caption for Image 2' },
  { src: '/assets/n3.jpg', caption: 'Caption for Image 3' },
  { src: '/assets/n4.jpg', caption: 'Caption for Image 4' },
];

const Slideshow = () => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Remove default arrows
  };

  return (
    <div className="slideshow">
      <div className="slide-nav prev" onClick={handlePrev}></div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={`Slide ${index + 1}`} />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </Slider>
      <div className="slide-nav next" onClick={handleNext}></div>
    </div>
  );
};

export default Slideshow;
