import React from "react";

const Hero = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const totalSlides = 3;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((idx) => (idx + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const images = [
    '/images/hero_img1.jpg',
    // '/images/hero_img2.jpg',
    '/images/hero_img_3.jpg',
    '/images/hero_img_4.jpg',
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        background: '#f8fafc',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(30, 41, 59, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: idx === activeSlide ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              background: 'no-repeat center/cover',
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          >
            <img
              src={src}
              alt={`RateBot Homes hero image ${idx + 1}`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '2rem',
          pointerEvents: 'none',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: 900,
            letterSpacing: '-1px',
            color: '#f8fafc',
            margin: '0',
            lineHeight: '1.1',
          }}
        >
          Luxury Redefined
        </h1>
        <p
          style={{
            fontSize: '1.3rem',
            color: '#e2e8f0',
            maxWidth: '600px',
            margin: '1rem 0 2rem',
            fontWeight: 400,
        }}
        >
          Experience unparalleled hospitality where modern sophistication meets warm comfort.
          Your ideal retreat awaits.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '0.8rem',
            justifyContent: 'start',
            flexWrap: 'wrap',
            pointerEvents: 'auto',
          }}
        >
          <a
            href="#rooms"
            style={{
              padding: '0.8rem 2rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              background: '#d97706',
              color: '#fff',
              borderRadius: '4px',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#b54700';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#d97706';
            }}
          >
            Explore Rooms
          </a>
          
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
          pointerEvents: 'auto',
        }}
      >
        {[...Array(totalSlides).keys()].map((idx) => (
          <div
            key={idx}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: idx === activeSlide ? '#d97706' : '#e2e8f0',
              transition: 'background 0.3s ease',
              cursor: 'pointer',
            }}
            onClick={() => setActiveSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;