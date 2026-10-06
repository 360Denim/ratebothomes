import React from 'react';
import './Gallery.css';

const images = [
  {
    src: '/images/gallery_1.avif',
    alt: 'Luxury suite interior at RateBot Homes',
  },
  {
    src: '/images/gallery_2.avif',
    alt: 'Elegant room ambiance at RateBot Homes',
  },
  {
    src: '/images/gallery_3.avif',
    alt: 'RateBot Homes exterior',
  },
  {
    src: '/images/gallery_4.avif',
    alt: 'Premium amenities at RateBot Homes',
  },
  {
    src: '/images/gallery_5.avif',
    alt: 'Luxury suite view at RateBot Homes',
  },
  {
    src: '/images/gallery_6.avif',
    alt: 'Common area at RateBot Homes',
  },
  {
    src: '/images/gallery_7.avif',
    alt: 'Pool area at RateBot Homes',
  },
  {
    src: '/images/gallery_8.avif',
    alt: 'Sunset view at RateBot Homes',
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="gallery-section"
    >
      <div className="gallery-container">

        {/* Heading */}
        <div className="gallery-header">
          <h2 className="gallery-title">
            Gallery
          </h2>

          <p className="gallery-description">
            Step into a world of sophistication as you explore RateBot Homes.
            Discover beautifully designed spaces, thoughtful details, relaxing
            surroundings, and an experience crafted for comfort and elegance.
          </p>
        </div>

        {/* Gallery */}
        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.src}
              className="gallery-item"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />

              {/* Circular hover reveal */}
              <div className="gallery-overlay" />

              {/* Subtle border */}
              <div className="gallery-border" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;