import React, { useState } from 'react';
import './Home.css';
import Header from '../components/Header';
import Features from '../components/Features';
import Carousel from '../components/Carousel';
import RecentPosts from '../components/RecentPosts';
import Footer from '../components/Footer';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      textHeading: "Hello, I'm Harsh. I'm a Freelance Web Developer.",
      description: 'With a keen eye for design and a knack for innovative solutions, I specialize in creating beautiful, functional, and user-centric websites that stand out.',
      img: '/images/professional.jpeg',
      buttons: [
        { text: 'Explore', link: '/explore' },
        { text: 'Community', link: '/community' }
      ]
    },
    {
      textHeading: 'Passionate MERN Stack Developer',
      description: 'Specializing in React, Node.js, and MongoDB, I create dynamic and responsive web applications that deliver exceptional user experiences.',
      img: '/images/mern-stack.jpg',
      buttons: [
        { text: 'View Projects', link: '/projects' },
        { text: 'My Skills', link: '/skills' }
      ]
    },
    {
      textHeading: 'Innovative Problem Solver',
      description: 'With strong skills in data structures and algorithms, I tackle complex challenges and develop efficient solutions for real-world problems.',
      img: '/images/problem-solving.jpg',
      buttons: [
        { text: 'Case Studies', link: '/case-studies' },
        { text: 'My Approach', link: '/approach' }
      ]
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home">
      <Header />
      <main>
        <Carousel
          slides={slides}
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
        <Features />
        <RecentPosts />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

