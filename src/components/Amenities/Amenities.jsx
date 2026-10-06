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
import './Amenities.css';

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

const Amenities = () => {
  const [animated, setAnimated] = React.useState(false);

  React.useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section id="amenities" className="amenities-section">
      <div className="amenities-container">
        {/* Left Content */}
        <div
          className={`amenities-content ${
            animated ? 'amenities-content-visible' : ''
          }`}
        >
          <span className="amenities-label">WHAT WE OFFER</span>

          <h2 className="amenities-title">
            The <span className="amenities-title-highlight">Essentials</span>
          </h2>

          <p className="amenities-description">
            Everything you need for a comfortable, convenient and memorable
            stay at RateBotHomes. Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the
            cites of the word in classical literature, discovered the
            undoubtable source.
          </p>

          <a href="#" className="amenities-link">
            EXPLORE ALL AMENITIES
          </a>
        </div>

        {/* Amenities Grid */}
        <div className="amenities-grid">
          {amenities.map((amenity) => {
            const AmenityIcon = amenity.icon;

            return (
              <div key={amenity.id} className="amenity-card">
                <div className="amenity-icon">
                  <AmenityIcon
                    size={28}
                    color="#d97706"
                    strokeWidth={1.8}
                  />
                </div>

                <span className="amenity-name">{amenity.name}</span>

                <span className="amenity-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;