const Experiences = () => {
  return (
    <section 
      id="experiences" 
      style={{
        padding: '6rem 0',
        background: '#f8fafc',
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
            marginBottom: '3rem',
          }}
        >
          <h2 
            style={{
              fontSize: '3rem',
              fontWeight: 900,
              letterSpacing: '-1px',
              color: '#1e293b',
              marginBottom: '1rem',
            }}
          >
            Unique Experiences
          </h2>
          <p 
            style={{
              fontSize: '1.1rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Immerse yourself in curated experiences designed to showcase the best of our locality. From culinary journeys to cultural explorations, every moment is crafted for discovery.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <div 
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1571009761811-3613c18bb1e1?w=800&q=80"
              alt="Spa & Wellness"
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
            }}
            />
            <div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, #fff)',
                padding: '1.2rem',
            }}
            >
              <h3 
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '0.4rem',
                }}
              >
                Spa & Wellness
              </h3>
              <p 
                style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                }}
              >
                Rejuvenate with premium treatments
              </p>
            </div>
          </div>

          <div 
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#fff',
              marginTop: '1.5rem',
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1514326127226-f98fcf428c2e?w=800&q=80"
              alt="Gourmet Dining"
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
            }}
            />
            <div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, #fff)',
                padding: '1.2rem',
            }}
            >
              <h3 
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '0.4rem',
                }}
              >
                Gourmet Dining
              </h3>
              <p 
                style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                }}
              >
                Culinary excellence with local flavors
              </p>
            </div>
          </div>

          <div 
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#fff',
              marginTop: '1.5rem',
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1582719564498-5939699784b5?w=800&q=80"
              alt="Cultural Tours"
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
            }}
            />
            <div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, #fff)',
                padding: '1.2rem',
            }}
            >
              <h3 
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '0.4rem',
                }}
              >
                Cultural Tours
              </h3>
              <p 
                style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                }}
              >
                Discover local heritage and traditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;