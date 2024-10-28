import React, { useState } from 'react';
import Modal from 'react-modal';
import './Gallery.css';

// Ensure the modal is accessible for screen readers
Modal.setAppElement('#root');

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    { src: 'https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg', alt: 'Event 1' },
    { src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg', alt: 'Event 2' },
    { src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg', alt: 'Event 3' },
    { src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', alt: 'Event 4' },
    { src: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg', alt: 'Event 5' },
    { src: 'https://images.pexels.com/photos/3184359/pexels-photo-3184359.jpeg', alt: 'Event 6' },
    { src: 'https://images.pexels.com/photos/3862374/pexels-photo-3862374.jpeg', alt: 'Event 7' },
    { src: 'https://images.pexels.com/photos/3778866/pexels-photo-3778866.jpeg', alt: 'Event 8' },
    { src: 'https://images.pexels.com/photos/3182804/pexels-photo-3182804.jpeg', alt: 'Event 9' },
    { src: 'https://images.pexels.com/photos/3184351/pexels-photo-3184351.jpeg', alt: 'Event 10' },
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(index)}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
