import React from 'react';
import './Rooms.css';

const rooms = [
  {
    id: 1,
    title: 'Deluxe King Suite',
    description: 'Urban elegance with city views',
    image:
      'https://images.unsplash.com/photo-1564135622042-0d698c21d9e6?w=800&q=80',
    alt: 'Deluxe King Room',
  },
  {
    id: 2,
    title: 'Suite with Private Balcony',
    description: 'Serene retreat with outdoor space',
    image:
      'https://images.unsplash.com/photo-1582719564498-5939699784b5?w=800&q=80',
    alt: 'Suite with Private Balcony',
  },
  {
    id: 3,
    title: 'Family Suite',
    description: 'Spacious comfort for families',
    image:
      'https://images.unsplash.com/photo-1582714353920-ba65b2411c36?w=800&q=80',
    alt: 'Family Suite',
  },
];

const Rooms = () => {
  return (
    <section
      id="rooms"
      className="rooms-section"
    >
      <div className="rooms-container">

        {/* Header */}
        <div className="rooms-header">
          <h2 className="rooms-title">
            Our Rooms
          </h2>

          <p className="rooms-description">
            Each of our uniquely designed rooms and suites offers a
            sanctuary of comfort, featuring premium amenities and
            thoughtful details that cater to every traveler's needs.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="rooms-grid">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="room-card"
            >
              <img
                src={room.image}
                alt={room.alt}
                className="room-card-image"
              />

              <div className="room-card-overlay">
                <h3 className="room-card-title">
                  {room.title}
                </h3>

                <p className="room-card-description">
                  {room.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Rooms;