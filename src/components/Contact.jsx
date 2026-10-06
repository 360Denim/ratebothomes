import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Contact Information */}
          <div
            style={{
              flex: '1',
              minWidth: '300px',
            }}
          >
            <h2
              style={{
                fontSize: '3rem',
                fontWeight: 900,
                letterSpacing: '-1px',
                color: '#1e293b',
                marginBottom: '1.5rem',
              }}
            >
              Contact Us
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#64748b',
                marginBottom: '2rem',
                lineHeight: '1.6',
              }}
            >
              Have questions or ready to book your stay? Reach out to our team
              and we'll be delighted to assist you with personalized service.
            </p>

            {/* Contact Details */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              {/* Email */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    minWidth: '40px',
                    borderRadius: '50%',
                    background: 'rgba(217, 119, 6, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail
                    size={18}
                    color="#d97706"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.15rem',
                    }}
                  >
                    Email
                  </span>

                  <span
                    style={{
                      fontSize: '1rem',
                      color: '#64748b',
                    }}
                  >
                    info@ratebothomes.com
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    minWidth: '40px',
                    borderRadius: '50%',
                    background: 'rgba(217, 119, 6, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Phone
                    size={18}
                    color="#d97706"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.15rem',
                    }}
                  >
                    Phone
                  </span>

                  <span
                    style={{
                      fontSize: '1rem',
                      color: '#64748b',
                    }}
                  >
                    +1 (555) 123-4567
                  </span>
                </div>
              </div>

              {/* Address */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    minWidth: '40px',
                    borderRadius: '50%',
                    background: 'rgba(217, 119, 6, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin
                    size={18}
                    color="#d97706"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.15rem',
                    }}
                  >
                    Address
                  </span>

                  <span
                    style={{
                      fontSize: '1rem',
                      color: '#64748b',
                    }}
                  >
                    123 Luxury Boulevard, Metropolitan City
                  </span>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div
              style={{
                marginTop: '1rem',
                padding: '1.5rem',
                background: '#f1f5f9',
                borderRadius: '8px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  marginBottom: '0.4rem',
                }}
              >
                Office Hours
              </h3>

              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                  lineHeight: '1.7',
                  margin: 0,
                }}
              >
                Monday - Friday: 8:00 AM - 8:00 PM
                <br />
                Saturday: 9:00 AM - 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              flex: '1',
              minWidth: '300px',
            }}
          >
            <h3
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#1e293b',
                marginBottom: '1.2rem',
              }}
            >
              Send Us a Message
            </h3>

            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <input
                type="text"
                placeholder="Full name"
                style={{
                  padding: '0.8rem 1.2rem',
                  fontSize: '0.95rem',
                  background: '#fff',
                  color: '#1e293b',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#d97706';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#cbd5e1';
                }}
                required
              />

              <input
                type="email"
                placeholder="Email address"
                style={{
                  padding: '0.8rem 1.2rem',
                  fontSize: '0.95rem',
                  background: '#fff',
                  color: '#1e293b',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#d97706';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#cbd5e1';
                }}
                required
              />

              <textarea
                rows={3}
                placeholder="Your message"
                style={{
                  padding: '0.8rem 1.2rem',
                  fontSize: '0.95rem',
                  background: '#fff',
                  color: '#1e293b',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#d97706';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#cbd5e1';
                }}
                required
              />

              <button
                type="submit"
                style={{
                  padding: '0.8rem 2rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  background: '#d97706',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontFamily: 'inherit',
                  transition: 'background 0.3s ease',
                  marginTop: 'auto',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#b54700';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#d97706';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;