import React from 'react';
 // Ensure this path is correct
import Header from '../components/Header';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Gallery from '../components/Gallery';
// import Social from '../components/Social';

const About = () => {
  return (
    <>
      <Header />
        <Skills />
        <Gallery />
   
      <Footer />
    </>
  );
};

export default About;
