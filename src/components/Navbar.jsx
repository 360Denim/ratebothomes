import React, { useState } from 'react';

const Navbar = () => {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const [hoveredLink, setHoveredLink] = useState(null);
  const [isBookHovered, setIsBookHovered] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(248, 250, 252, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
       
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "#d97706",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                R
              </div>
          <span
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '0.5px',
              color: '#1e293b',
              textTransform: 'uppercase',
            }}
          >
            RateBot Homes
          </span>
        </div>

        {/* Navigation + Book Now */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {links.map((link) => {
            const isHovered = hoveredLink === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  position: 'relative',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: isHovered ? '#d97706' : '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  padding: '0.25rem 0',
                }}
              >
                {link.label}

                {/* Animated underline */}
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: isHovered ? '100%' : '0%',
                    height: '2px',
                    background: '#d97706',
                    transition: 'width 0.3s ease',
                  }}
                />
              </a>
            );
          })}

          {/* Book Now Button */}
          <a
            href="#booking"
            onMouseEnter={() => setIsBookHovered(true)}
            onMouseLeave={() => setIsBookHovered(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.7rem 1.4rem',
              background: isBookHovered ? '#b45309' : '#d97706',
              color: '#ffffff',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.7px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '4px',
              boxShadow: isBookHovered
                ? '0 6px 16px rgba(217, 119, 6, 0.3)'
                : '0 3px 10px rgba(217, 119, 6, 0.2)',
              transform: isBookHovered
                ? 'translateY(-2px)'
                : 'translateY(0)',
              transition: 'all 0.3s ease',
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;