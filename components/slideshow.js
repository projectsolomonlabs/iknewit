import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setSlideIndex(slideIndex => (slideIndex + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(slideshowTimer);
    };
  }, []);

  const slides = [
    { src: '/1.gif', alt: 'Image 2' },
    { src: '/2.gif', alt: 'Image 2.5' },
    { src: '/3.gif', alt: 'Image 3' },
    { src: '/4.gif', alt: 'Image 3.5' },
    { src: '/5.gif', alt: 'Image 4' },
    { src: '/6.gif', alt: 'Image 5' },
    { src: '/7.gif', alt: 'Image 6' },
    { src: '/8.gif', alt: 'Image 7' },
    { src: '/9.gif', alt: 'Image 8' },
    { src: '/10.gif', alt: 'Image 10' },
    { src: '/11.gif', alt: 'Image 11' },
    { src: '/12.gif', alt: 'Image 12' },
    { src: '/13.gif', alt: 'Image 13' },
    { src: '/14.gif', alt: 'Image 14' },
    { src: '/15.gif', alt: 'Image 15' },
    { src: '/16.gif', alt: 'Image 16' },
  ];

  function prevSlide() {
    setSlideIndex(slideIndex => (slideIndex === 0 ? slides.length - 1 : slideIndex - 1));
  }

  function nextSlide() {
    setSlideIndex(slideIndex => (slideIndex + 1) % slides.length);
  }

  return (
    <div className={styles.slideshowContainer}>
      <div className={styles.slideshowImages}>
        {slides.map((slide, index) => (
          <img
            key={index}
            className={`${styles.slide} ${slideIndex === index ? styles.active : ''}`}
            src={slide.src}
            alt={slide.alt}
          />
        ))}
      </div>
      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
      <button className={styles.next} onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default Slideshow;
