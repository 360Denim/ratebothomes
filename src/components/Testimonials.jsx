import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: '"The most luxurious stay I\'ve experienced this year. Every detail was perfect, from the welcome amenities to the stunning room design. RateBot Homes truly sets a new standard for hospitality."',
      author: "Alex R.",
      role: "Verified Guest",
    },
    {
      id: 2,
      text: '"Words cannot describe how beautiful and tranquil our stay was. The architecture, the service, the attention to detail—everything exceeded our expectations. Will definitely return."',
      author: "Sofia M.",
      role: "Verified Guest",
    },
    {
      id: 3,
      text: '"From the moment we arrived until our departure, every aspect of our stay was exceptional. The staff was attentive, the room was pristine, and the ambiance was simply magical. Highly recommended!"',
      author: "Anouska T.",
      role: "Verified Guest",
    },
    {
      id: 4,
      text: '"The most luxurious stay I\'ve experienced this year. Every detail was perfect, from the welcome amenities to the stunning room design. RateBot Homes truly sets a new standard for hospitality."',
      author: "Rohit K.",
      role: "Verified Guest",
    },
    {
      id: 5,
      text: '"Words cannot describe how beautiful and tranquil our stay was. The architecture, the service, the attention to detail—everything exceeded our expectations. Will definitely return."',
      author: "Denim K.",
      role: "Verified Guest",
    },
    {
      id: 6,
      text: '"From the moment we arrived until our departure, every aspect of our stay was exceptional. The staff was attentive, the room was pristine, and the ambiance was simply magical. Highly recommended!"',
      author: "Marcus T.",
      role: "Verified Guest",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalTestimonials = testimonials.length;

  React.useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex(
        (idx) => (idx + 1) % totalTestimonials
      );
    }, 4500);

    return () => {
      clearInterval(interval);
    };
  }, [totalTestimonials]);

  const [showCount, setShowCount] = React.useState(
    window.innerWidth >= 768 ? 2 : 1
  );

  React.useEffect(() => {
    const handleResize = () => {
      setShowCount(window.innerWidth >= 768 ? 2 : 1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="testimonials"
      style={{
        padding: "8rem 0",
        backgroundImage: "url(/images/testimonial_bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(15, 23, 42, 0.55)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 900,
              letterSpacing: "-1px",
              color: "#fff",
              marginBottom: "1rem",
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            Guest Testimonials
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            See what our guests have to say about their stay with us.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                showCount === 2
                  ? "repeat(2, 1fr)"
                  : "1fr",
              gap: showCount === 2 ? "2rem" : "1rem",
              marginBottom: "2rem",
            }}
          >
            {[...Array(showCount)].map((_, i) => {
              const idx =
                (activeIndex + i) % totalTestimonials;

              const testimonial = testimonials[idx];

              return (
                <div
                  key={testimonial.id}
                  style={{
                    background: "rgba(255, 255, 255, 0.94)",
                    borderRadius: "12px",
                    padding: "2rem",
                    boxShadow:
                      "0 4px 20px rgba(0, 0, 0, 0.15)",
                    transition:
                      "transform 0.6s ease, opacity 0.6s ease",
                    transform: "translateY(0)",
                    opacity: 1,
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.15rem",
                      color: "#1e293b",
                      margin: "0 0 1.2rem 0",
                      fontStyle: "italic",
                      lineHeight: "1.5",
                    }}
                  >
                    {testimonial.text}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "#d97706",
                      }}
                    />

                    <div>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "#1e293b",
                          margin: "0",
                        }}
                      >
                        {testimonial.author}
                      </p>

                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "#64748b",
                          margin: "0",
                        }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            {[...Array(totalTestimonials).keys()].map(
              (idx) => (
                <div
                  key={idx}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background:
                      idx === activeIndex
                        ? "#d97706"
                        : "rgba(255, 255, 255, 0.55)",
                    transition: "background 0.3s ease",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveIndex(idx)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;