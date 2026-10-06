import { BedDouble, Users, Star } from 'lucide-react';
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
    <section 
      id="about" 
      style={{
        padding: '8rem 0',
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
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          <div 
            style={{
              selfAlign: 'start',
            }}
          >
            <span 
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#d97706',
                marginBottom: '0.8rem',
                display: 'inline-block',
              }}
            >
              ABOUT US
            </span>
            <h2 
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '3rem',
                fontWeight: 700,
                letterSpacing: '-0.3px',
                color: '#1e293b',
                margin: '0 0 1.2rem',
                lineHeight: '1.3',
                width: '90%',
              }}
            >
              Welcome to 
              <span
              style={{
                fontSize: '2.8rem',
                fontWeight: 700,
                letterSpacing: '-0.2px',
                color: '#d97706',
                marginLeft: '0.5rem',
              }}
            >
              RateBot Homes
            </span>
            </h2>
            
            <p 
              style={{
                fontSize: '1rem',
                color: '#64748b',
                margin: '0 0 1.8rem',
                fontFamily: 'inherit',
                lineHeight: '1.5',
              }}
            >
              At RateBot Homes, we believe that every stay should be more than just accommodation—it should be an experience crafted with care, comfort, and sophistication. Since our founding, we have been dedicated to redefining hospitality through personalized service and attention to detail.
            </p>
           <div
  style={{
    display: 'flex',
    gap: '1.2rem',
    marginTop: '1.5rem',
    flexWrap: 'wrap',
  }}
>
  {stats.map((stat) => {
    const StatIcon = stat.icon;

    return (
      <div
        key={stat.label}
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '0.8rem 1.2rem',
          background: '#fff',
          borderRadius: '6px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '90px',
          transition: 'transform 0.2s ease',
          cursor: 'default',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
       
        <div
          style={{
            width: '24px',
            height: '24px',
            background: '#d97706',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.3rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <StatIcon
            size={14}
            color="#fff"
            strokeWidth={2}
          />
        </div>

        <span
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#1e293b',
            lineHeight: '1',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {stat.value}
        </span>

        {/* Label */}
        <p
          style={{
            fontSize: '0.75rem',
            color: '#64748b',
            textAlign: 'center',
            margin: '0.3rem 0 0',
            lineHeight: '1.2',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {stat.label}
        </p>
      </div>
    );
  })}
</div>
          </div>

          <div
  style={{
    position: 'relative',
    height: '520px',
    width: '100%',
  }}
>
  {/* Main Image */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      width: '72%',
      height: '72%',
      borderRadius: '14px',
      overflow: 'hidden',
      boxShadow: '0 20px 45px rgba(15, 23, 42, 0.16)',
      border: '6px solid #fff',
      zIndex: 1,
    }}
  >
    <img
      src="/images/about_1.jpg"
      alt="Luxury interior at RateBot Homes"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        transition: 'transform 0.6s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    />
  </div>

  {/* Top Left Image */}
  <div
    style={{
      position: 'absolute',
      top: '8%',
      left: 0,
      width: '34%',
      height: '42%',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 12px 30px rgba(15, 23, 42, 0.14)',
      border: '5px solid #fff',
      zIndex: 2,
    }}
  >
    <img
      src="/images/about_2.jpg"
      alt="Comfortable room at RateBot Homes"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        transition: 'transform 0.6s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    />
  </div>

  {/* Bottom Left Image */}
  <div
    style={{
      position: 'absolute',
      bottom: 0,
      left: '8%',
      width: '42%',
      height: '43%',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(15, 23, 42, 0.15)',
      border: '5px solid #fff',
      zIndex: 3,
    }}
  >
    <img
      src="/images/about_4.jpg"
      alt="Relaxing space at RateBot Homes"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        transition: 'transform 0.6s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    />
  </div>

  {/* Bottom Right Image */}
  <div
    style={{
      position: 'absolute',
      bottom: '4%',
      right: 0,
      width: '46%',
      height: '48%',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 18px 40px rgba(15, 23, 42, 0.18)',
      border: '5px solid #fff',
      zIndex: 2,
    }}
  >
    <img
      src="/images/about_3.jpg"
      alt="Premium hospitality experience at RateBot Homes"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        transition: 'transform 0.6s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    />
  </div>

  <div
    style={{
      position: 'absolute',
      bottom: '-8px',
      left: '-8px',
      width: '70px',
      height: '70px',
      border: '2px solid #d97706',
      borderRadius: '50%',
      zIndex: 0,
      opacity: 0.7,
    }}
  />
</div>
        </div>
      </div>
    </section>
  );
};

export default About;