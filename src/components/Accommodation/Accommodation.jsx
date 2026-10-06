import React from 'react';
import './Accommodation.css';

const rooms = [
  {
    id: 1,
    title: 'Suite',
    description:
      'Spacious suite with premium amenities and stunning views Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since 1966',
    image: '/images/about_1.jpg',
    cta: 'Book Now',
  },
  {
    id: 2,
    title: 'Premium Room',
    description:
      'Elegant room with modern comforts and refined design Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since 1966',
    image: '/images/about_2.jpg',
    cta: 'Book Now',
  },
  {
    id: 3,
    title: 'Deluxe Room',
    description:
      'Luxurious room with extra space and premium furnishings Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since 1966',
    image: '/images/about_3.jpg',
    cta: 'Book Now',
  },
  {
    id: 4,
    title: 'Premium Twin Bed',
    description:
      'Comfortable twin setup ideal for families or groups Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since 1966',
    image: '/images/about_4.jpg',
    cta: 'Book Now',
  },
];

const Accommodation = () => {
  const [isReducedMotion, setIsReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const handleChange = (event) => {
      setIsReducedMotion(event.matches);
    };

    setIsReducedMotion(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <section
      id="rooms"
      className={`accommodation-section ${
        isReducedMotion ? 'reduced-motion' : ''
      }`}
    >
      <div className="accommodation-container">
        <div className="accommodation-header">
          <p className="accommodation-label">
            Accommodation
          </p>

          <h2 className="accommodation-title">
            Our Rooms
          </h2>

          <p className="accommodation-description">
            Experience comfort and sophistication in our carefully
            curated rooms, each designed to provide a premium retreat
            for your stay.
          </p>
        </div>

        <div className="accommodation-grid">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="room-card"
            >
              <img
                src={room.image}
                alt={`${room.title} room at RateBot Homes`}
                className="room-image"
              />

              <div className="room-overlay">
                <h3 className="room-title">
                  {room.title}
                </h3>

                <p className="room-description">
                  {room.description}
                </p>

                <a
                  href="#"
                  className="room-cta"
                >
                  {room.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;