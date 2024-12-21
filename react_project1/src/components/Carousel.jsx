import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const Carousel = ({ slides, currentSlide, nextSlide, prevSlide }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <section className="carousel">
      <div className="carousel-content">
        <div className="slide-text">
          <h1>{slides[currentSlide].textHeading}</h1>
          <p>{slides[currentSlide].description}</p>
          <div className="carousel-button">
            {slides[currentSlide].buttons.map((button, index) => (
              <Link key={index} to={button.link} className="carousel-btn">
                {button.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="slide-image">
          <img src={slides[currentSlide].img} alt="carousel-slide" />
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </section>
  );
};

export default Carousel;

