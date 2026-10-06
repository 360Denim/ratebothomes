import React, { useState } from 'react';

const Gallery = () => {
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

  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section
      id="gallery"
      style={{
        padding: '8rem 0',
        background: '#f8fafc',
        overflow: 'hidden',
      }}
    >
      <style>
        {`
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 1.5rem;
          }

          .gallery-item {
            position: relative;
            aspect-ratio: 4 / 3;
            min-width: 0;
          }

          @media (max-width: 1023px) {
            .gallery-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 767px) {
            .gallery-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .gallery-image,
            .gallery-overlay {
              transition: none !important;
            }
          }
        `}
      </style>

      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 900,
              letterSpacing: '-1px',
              color: '#1e293b',
              margin: '0 0 1rem',
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            Gallery
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#64748b',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            Step into a world of sophistication as you explore RateBot Homes.
            Discover beautifully designed spaces, thoughtful details, relaxing
            surroundings, and an experience crafted for comfort and elegance.
          </p>
        </div>

        {/* Gallery */}
        <div className="gallery-grid">
          {images.map((image, idx) => {
            const isHovered = hoveredImage === idx;

            return (
              <div
                key={image.src}
                className="gallery-item"
                onMouseEnter={() => setHoveredImage(idx)}
                onMouseLeave={() => setHoveredImage(null)}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#fff',
                  boxShadow: isHovered
                    ? '0 12px 30px rgba(217, 119, 6, 0.18)'
                    : '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'box-shadow 400ms ease',
                  isolation: 'isolate',
                }}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transform: isHovered
                      ? 'scale(1.05)'
                      : 'scale(1)',
                    transition:
                      'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />

                {/* Circular hover reveal */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(217, 119, 6, 0.18)',
                    border: '1px solid rgba(255, 255, 255, 0.45)',
                    transform: isHovered
                      ? 'translate(-50%, -50%) scale(18)'
                      : 'translate(-50%, -50%) scale(0)',
                    opacity: isHovered ? 1 : 0,
                    transition:
                      'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease',
                    pointerEvents: 'none',
                  }}
                />

                {/* Subtle border */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '12px',
                    border: isHovered
                      ? '2px solid rgba(217, 119, 6, 0.5)'
                      : '2px solid transparent',
                    transition: 'border-color 400ms ease',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;