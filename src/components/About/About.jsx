
import { BedDouble, Users, Star } from 'lucide-react';
import './About.css';

const stats = [
  {
    value: '4',
    label: 'Luxury Rooms',
    icon: BedDouble,
  },
  {
    value: '5',
    label: 'Expert Staff',
    icon: Users,
  },
  {
    value: '5',
    label: 'Guest Rating',
    icon: Star,
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">

          {/* About Content */}
          <div className="about-content">

            <span className="about-label">
              ABOUT US
            </span>

            <h2 className="about-title">
              Welcome to
              <span className="about-title-highlight">
                RateBot Homes
              </span>
            </h2>

            <p className="about-description">
              At RateBot Homes, we believe that every stay should be more than
              just accommodation—it should be an experience crafted with care,
              comfort, and sophistication. Since our founding, we have been
              dedicated to redefining hospitality through personalized service
              and attention to detail.
            </p>

            {/* Stats */}
            <div className="about-stats">
              {stats.map((stat) => {
                const StatIcon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="about-stat-card"
                  >
                    <div className="about-stat-icon">
                      <StatIcon
                        size={14}
                        color="#fff"
                        strokeWidth={2}
                      />
                    </div>

                    <span className="about-stat-value">
                      {stat.value}
                    </span>

                    <p className="about-stat-label">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="about-gallery">

            {/* Main Image */}
            <div className="about-image about-image-main">
              <img
                src="/images/about_1.jpg"
                alt="Luxury interior at RateBot Homes"
              />
            </div>

            {/* Top Left Image */}
            <div className="about-image about-image-top-left">
              <img
                src="/images/about_2.jpg"
                alt="Comfortable room at RateBot Homes"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="about-image about-image-bottom-left">
              <img
                src="/images/about_4.jpg"
                alt="Relaxing space at RateBot Homes"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="about-image about-image-bottom-right">
              <img
                src="/images/about_3.jpg"
                alt="Premium hospitality experience at RateBot Homes"
              />
            </div>

            {/* Decorative Circle */}
            <div className="about-decoration" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
