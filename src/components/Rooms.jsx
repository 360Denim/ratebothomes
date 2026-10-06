const Rooms = () => {
  return (
    <section 
      id="rooms" 
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
            Our Rooms
          </h2>
          <p 
            style={{
              fontSize: '1.1rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Each of our uniquely designed rooms and suites offers a sanctuary of comfort, featuring premium amenities and thoughtful details that cater to every traveler's needs.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
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
              height: '400px',
              background: '#fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => { e.target.style.transform = 'translateY(-8px)'; }}
            onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; }}
          >
            <img 
              src="https://images.unsplash.com/photo-1564135622042-0d698c21d9e6?w=800&q=80"
              alt="Deluxe King Room"
              style={{
                width: '100%',
                height: '100%',
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
                padding: '1.5rem',
            }}
            >
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '0.5rem',
                }}
              >
                Deluxe King Suite
              </h3>
              <p 
                style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                }}
              >
                Urban elegance with city views
              </p>
            </div>
          </div>

          <div 
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '400px',
              background: '#fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => { e.target.style.transform = 'translateY(-8px)'; }}
            onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; }}
          >
            <img 
              src="https://images.unsplash.com/photo-1582719564498-5939699784b5?w=800&q=80"
              alt="Suite with Private Balcony"
              style={{
                width: '100%',
                height: '100%',
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
                padding: '1.5rem',
            }}
            >
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '0.5rem',
                }}
              >
                Suite with Private Balcony
              </h3>
              <p 
                style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                }}
              >
                Serene retreat with outdoor space
              </p>
            </div>
          </div>

          <div 
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '400px',
              background: '#fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => { e.target.style.transform = 'translateY(-8px)'; }}
            onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; }}
          >
            <img 
              src="https://images.unsplash.com/photo-1582714353920-ba65b2411c36?w=800&q=80"
              alt="Family Suite"
              style={{
                width: '100%',
                height: '100%',
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
                padding: '1.5rem',
            }}
            >
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '0.5rem',
                }}
              >
                Family Suite
              </h3>
              <p 
                style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                }}
              >
                Spacious comfort for families
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;