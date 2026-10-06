import React from "react";

const Accommodation = () => {
  const rooms = [
    {
      id: 1,
      title: 'Suite',
      description: 'Spacious suite with premium amenities and stunning views Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since 1966',
      image: '/images/about_1.jpg',
      cta: 'Book Now',
    },
    {
      id: 2,
      title: 'Premium Room',
      description: 'Elegant room with modern comforts and refined design Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since 1966',
      image: '/images/about_2.jpg',
      cta: 'Book Now',
    },
    {
      id: 3,
      title: 'Deluxe Room',
      description: 'Luxurious room with extra space and premium furnishings Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since 1966',
      image: '/images/about_3.jpg',
      cta: 'Book Now',
    },
    {
      id: 4,
      title: 'Premium Twin Bed',
      description: 'Comfortable twin setup ideal for families or groups Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since 1966',
      image: '/images/about_4.jpg',
      cta: 'Book Now',
    },
  ];

  // Track hover states for animations
  const [isHovered, setIsHovered] = React.useState(Array(4).fill(false));

  // Check for reduced motion preference
  const reducedMotion = React.useRef(
    window.matchMedia('(prefers-reduced-motion: reduce)')
  );

  React.useEffect(() => {
    const handler = (e) => {
      if (e.matches) {
        setIsHovered(Array(4).fill(false));
      }
    };
    reducedMotion.current.addListener(handler);
    handler(reducedMotion.current);
    return () => reducedMotion.current.removeListener(handler);
  }, []);

  // Determine transition duration based on reduced motion
  const isReduced = reducedMotion.current.matches;
  const duration = isReduced ? '0s' : '0.6s';

  return (
    <section 
      id="rooms" 
      style={{
        padding: '8rem 0',
        background: '#1e293b',
      }}
    >
      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <p 
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#d97706',
              marginBottom: '1rem',
              fontFamily: 'inherit',
            }}
          >
            Accommodation
          </p>
          <h2 
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '3rem',
              fontWeight: 700,
              letterSpacing: '-0.3px',
              color: '#f8fafc',
              margin: '0 0 1.5rem',
              lineHeight: '1.3',
            }}
          >
            Our Rooms
          </h2>
          <p 
            style={{
              fontSize: '1.125rem',
              color: '#64748b',
              margin: '0 auto 2rem',
              maxWidth: '600px',
              fontFamily: 'inherit',
              lineHeight: '1.5',
            }}
          >
            Experience comfort and sophistication in our carefully curated rooms, each designed to provide a premium retreat for your stay.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            padding: '0 1rem',
          }}
        >
          {rooms.map((room, index) => {
            const isCurrentHover = isHovered[index];

            return (
              <div
                key={room.id}
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  height: '350px',
                  cursor: 'pointer',
                }}
                onMouseOver={() => setIsHovered(
                  isHovered.map((_, i) => i === index)
                )}
                onMouseOut={() => setIsHovered(Array(4).fill(false))}
              >
                <img
                  src={room.image}
                  alt={room.title + ' room at D7Homes'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: `transform ${duration}, opacity ${duration}`,
                    transform: isCurrentHover ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(30, 41, 59, 0.8))',
                    padding: '1.5rem',
                    transition: `transform ${duration}, opacity ${duration}`,
                    transform: isCurrentHover ? 'translateY(-80px)' : 'translateY(100%)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#f8fafc',
                      margin: '0 0 0.5rem',
                      lineHeight: '1.3',
                    }}
                  >
                    {room.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: '#e2e8f0',
                      margin: '0',
                      lineHeight: '1.4',
                      opacity: isCurrentHover ? 1 : 0,
                      transition: `opacity ${duration}`,
                    }}
                  >
                    {room.description}
                  </p>
                  <a
                    href='#'
                    style={{
                      marginTop: '0.8rem',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      color: '#d97706',
                      background: 'transparent',
                      border: '2px solid #d97706',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                      opacity: isCurrentHover ? 1 : 0,
                      transition: `opacity ${duration}, transform ${duration}`,
                    }}
                  >
                    {room.cta}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;