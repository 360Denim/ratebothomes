import React from 'react';
import './Hero.css';

const Hero = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const images = [
    '/images/hero_img1.jpg',
    // '/images/hero_img2.jpg',
    '/images/hero_img_3.jpg',
    '/images/hero_img_4.jpg',
  ];

  const totalSlides = images.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((idx) => (idx + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section
      id="hero"
      className="hero-section"
    >
      {/* Background Images */}
      <div className="hero-background">
        {images.map((src, idx) => (
          <div
            key={src}
            className={`hero-slide ${
              idx === activeSlide ? 'hero-slide-active' : ''
            }`}
          >
            <img
              src={src}
              alt={`RateBot Homes hero image ${idx + 1}`}
              className="hero-image"
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Luxury Redefined
        </h1>

        <p className="hero-description">
          Experience unparalleled hospitality where modern
          sophistication meets warm comfort. Your ideal retreat
          awaits.
        </p>

        <div className="hero-actions">
          <a
            href="#rooms"
            className="hero-button"
          >
            Explore Rooms
          </a>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="hero-indicators">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`hero-indicator ${
              idx === activeSlide ? 'hero-indicator-active' : ''
            }`}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === activeSlide ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;