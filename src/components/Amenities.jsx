import React from 'react';
import {
  Archive,
  Car,
  Coffee,
  Laptop,
  Phone,
  Plane,
  Snowflake,
  Tv,
  Wifi,
} from 'lucide-react';

const Amenities = () => {
  const amenities = [
    { id: 1, name: 'Parking Area', icon: Car },
    { id: 2, name: 'Wi-Fi Access', icon: Wifi },
    { id: 3, name: 'Air Conditioning', icon: Snowflake },
    { id: 4, name: 'Service on Call', icon: Phone },
    { id: 5, name: 'Smart TV', icon: Tv },
    { id: 6, name: 'Work Desk', icon: Laptop },
    { id: 7, name: 'Airport Pickup & Drop', icon: Plane },
    { id: 8, name: 'Electric Kettle', icon: Coffee },
    { id: 9, name: 'Free High-Speed Wi-Fi', icon: Wifi },
    { id: 10, name: 'Wardrobe', icon: Archive },
  ];

  const [columnCount, setColumnCount] = React.useState(() => {
    if (typeof window === 'undefined') {
      return 4;
    }

    return window.innerWidth >= 1024
      ? 4
      : window.innerWidth >= 768
        ? 2
        : 1;
  });

  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [animated, setAnimated] = React.useState(false);
  const [hoveredAmenity, setHoveredAmenity] = React.useState(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const handleMotionPreferenceChange = (event) => {
      setReducedMotion(event.matches);
    };

    setReducedMotion(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener(
        'change',
        handleMotionPreferenceChange
      );
    } else {
      mediaQuery.addListener(handleMotionPreferenceChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener(
          'change',
          handleMotionPreferenceChange
        );
      } else {
        mediaQuery.removeListener(handleMotionPreferenceChange);
      }
    };
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleResize = () => {
      setColumnCount(
        window.innerWidth >= 1024
          ? 4
          : window.innerWidth >= 768
            ? 2
            : 1
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    setAnimated(true);
  }, []);

  const transitionDuration = reducedMotion ? '0ms' : '300ms';

  return (
    <section
      id="amenities"
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #faf8f4, #f2e1ce 60%, #faf8f4)',
      }}
    >
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns:
            typeof window !== 'undefined' && window.innerWidth < 768
              ? '1fr'
              : '30% 70%',
          gap: '3rem',
        }}
      >
        {/* Left Content */}
        <div
          style={{
            alignSelf: 'start',
            transition: `opacity 0.6s ease`,
            opacity: animated ? 1 : 0,
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#d97706',
              marginBottom: '1rem',
              display: 'block',
            }}
          >
            WHAT WE OFFER
          </span>

          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '2.5rem',
              fontWeight: 700,
              letterSpacing: '-0.3px',
              color: '#1e293b',
              margin: '0 0 1rem',
              lineHeight: '1.3',
            }}
          >
            The{' '}
            <span
              style={{
                fontSize: '2.8rem',
                fontWeight: 700,
                letterSpacing: '-0.2px',
                color: '#d97706',
              }}
            >
              Essentials
            </span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: '#64748b',
              margin: '0 0 1.5rem',
              lineHeight: '1.5',
            }}
          >
            Everything you need for a comfortable, convenient and memorable stay at RateBotHomes. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p>

          <a
            href="#"
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#d97706',
              fontFamily: 'inherit',
              paddingBottom: '0.2rem',
              textDecoration: 'none',
              borderBottom: '2px solid #d97706',
              display: 'inline-block',
            }}
          >
            EXPLORE ALL AMENITIES
          </a>
        </div>

        {/* Amenities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
            gap: reducedMotion ? '1rem' : '2rem',
            width: '100%',
          }}
        >
          {amenities.map((amenity) => {
            const isHovered = hoveredAmenity === amenity.id;
            const AmenityIcon = amenity.icon;

            return (
              <div
                key={amenity.id}
                onMouseEnter={() =>
                  setHoveredAmenity(amenity.id)
                }
                onMouseLeave={() =>
                  setHoveredAmenity(null)
                }
                onFocus={() =>
                  setHoveredAmenity(amenity.id)
                }
                onBlur={() =>
                  setHoveredAmenity(null)
                }
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '1.8rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  minHeight: '150px',
                  width: '100%',
                  boxSizing: 'border-box',
                  cursor: 'default',
                  transition: reducedMotion
                    ? 'none'
                    : `transform ${transitionDuration} cubic-bezier(0.16, 1, 0.3, 1),
                       box-shadow ${transitionDuration} cubic-bezier(0.16, 1, 0.3, 1)`,
                  transform: isHovered
                    ? 'translateY(-4px) scale(1.02)'
                    : 'translateY(0) scale(1)',
                  boxShadow: isHovered
                    ? '0 10px 25px rgba(217, 119, 6, 0.15)'
                    : '0 1px 3px rgba(0, 0, 0, 0.05)',
                  borderColor: isHovered
                    ? '#d97706'
                    : '#e2e8f0',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(217, 119, 6, 0.1)',
                    border: '1px solid #d97706',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: reducedMotion
                      ? 'none'
                      : `transform ${transitionDuration} cubic-bezier(0.16, 1, 0.3, 1),
                         background ${transitionDuration} ease`,
                    transform: isHovered
                      ? 'scale(1.1) rotate(5deg)'
                      : 'scale(1) rotate(0)',
                    backgroundColor: isHovered
                      ? 'rgba(217, 119, 6, 0.16)'
                      : 'rgba(217, 119, 6, 0.1)',
                  }}
                >
                  <AmenityIcon
                    size={28}
                    color="#d97706"
                    strokeWidth={1.8}
                  />
                </div>
                <span
                  style={{
                    fontSize: '0.9rem',
                    color: '#1e293b',
                    fontWeight: 500,
                    marginBottom: 0,
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: '1.4',
                  }}
                >
                  {amenity.name}
                </span>

                <span
                  style={{
                    width: '100%',
                    height: '2px',
                    background: '#d97706',
                    opacity: isHovered ? 1 : 0,
                    marginTop: '0.75rem',
                    transition: reducedMotion
                      ? 'none'
                      : `opacity ${transitionDuration} ease`,
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

export default Amenities;