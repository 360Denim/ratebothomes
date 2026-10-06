import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: '"The most luxurious stay I\'ve experienced this year. Every detail was perfect, from the welcome amenities to the stunning room design. RateBot Homes truly sets a new standard for hospitality."',
    author: 'Alex R.',
    role: 'Verified Guest',
  },
  {
    id: 2,
    text: '"Words cannot describe how beautiful and tranquil our stay was. The architecture, the service, the attention to detail—everything exceeded our expectations. Will definitely return."',
    author: 'Sofia M.',
    role: 'Verified Guest',
  },
  {
    id: 3,
    text: '"From the moment we arrived until our departure, every aspect of our stay was exceptional. The staff was attentive, the room was pristine, and the ambiance was simply magical. Highly recommended!"',
    author: 'Anouska T.',
    role: 'Verified Guest',
  },
  {
    id: 4,
    text: '"The most luxurious stay I\'ve experienced this year. Every detail was perfect, from the welcome amenities to the stunning room design. RateBot Homes truly sets a new standard for hospitality."',
    author: 'Rohit K.',
    role: 'Verified Guest',
  },
  {
    id: 5,
    text: '"Words cannot describe how beautiful and tranquil our stay was. The architecture, the service, the attention to detail—everything exceeded our expectations. Will definitely return."',
    author: 'Denim K.',
    role: 'Verified Guest',
  },
  {
    id: 6,
    text: '"From the moment we arrived until our departure, every aspect of our stay was exceptional. The staff was attentive, the room was pristine, and the ambiance was simply magical. Highly recommended!"',
    author: 'Marcus T.',
    role: 'Verified Guest',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const totalTestimonials = testimonials.length;

  React.useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (reducedMotion.matches) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((idx) => (idx + 1) % totalTestimonials);
    }, 4500);

    return () => {
      clearInterval(interval);
    };
  }, [totalTestimonials]);

  /*
   * Render two testimonials at a time on desktop.
   * CSS hides the second card on mobile.
   */
  const visibleTestimonials = [0, 1].map((offset) => {
    const idx = (activeIndex + offset) % totalTestimonials;
    return testimonials[idx];
  });

  return (
    <section id="testimonials" className="testimonials-section">
      {/* Background Overlay */}
      <div className="testimonials-overlay" />

      {/* Content */}
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Guest Testimonials
          </h2>

          <p className="testimonials-subtitle">
            See what our guests have to say about their stay with us.
          </p>
        </div>

        <div className="testimonials-content">
          <div className="testimonials-grid">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`testimonial-card ${
                  index === 1 ? 'testimonial-card-secondary' : ''
                }`}
              >
                <p className="testimonial-text">
                  {testimonial.text}
                </p>

                <div className="testimonial-author">
                  <div className="testimonial-avatar" />

                  <div className="testimonial-author-info">
                    <p className="testimonial-author-name">
                      {testimonial.author}
                    </p>

                    <p className="testimonial-author-role">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="testimonials-pagination">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.id}
                type="button"
                className={`testimonial-dot ${
                  idx === activeIndex
                    ? 'testimonial-dot-active'
                    : ''
                }`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                aria-current={
                  idx === activeIndex ? 'true' : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;