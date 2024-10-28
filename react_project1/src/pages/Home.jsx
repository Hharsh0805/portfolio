import React, { useState } from 'react';
import './Home.css';
import Header from '../components/Header'; // This is the correct path

import Features from '../components/Features';
import Carousel from '../components/Carousel';
import Values from '../components/Values';
import Footer from '../components/Footer';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      textHeading: "Hello, I’m Harsh. I'm a Freelance Web Developer.",
      description: 'With a keen eye for design and a knack for innovative solutions, I specialize in creating beautiful, functional, and user-centric websites that stand out.',
      img: '/images/professional.jpeg',
      buttons: [
        { text: 'Explore', link: '/explore' },
        { text: 'Community', link: '/community' }
      ]
    },
    {
      textHeading: 'About Me',
      description: 'Learn more about my journey.',
      img: '/images/about-image.png',
      buttonText: 'Read More',
      buttonLink: '/about',
    },
    {
      textHeading: 'My Portfolio',
      description: 'Check out my recent projects.',
      img: '/images/portfolio-image.png',
      buttonText: 'See Portfolio',
      buttonLink: '/portfolio',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="App">
      <Header />
      <Carousel
        slides={slides}
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <Features />
      <Values />
      <Footer />
    </div>
  );
};

export default Home;
