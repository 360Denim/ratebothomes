import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-layout">
          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="contact-title">Contact Us</h2>

            <p className="contact-description">
              Have questions or ready to book your stay? Reach out to our team
              and we'll be delighted to assist you with personalized service.
            </p>

            {/* Contact Details */}
            <div className="contact-details">
              {/* Email */}
              <div className="contact-detail">
                <div className="contact-icon">
                  <Mail
                    size={18}
                    color="#d97706"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="contact-detail-content">
                  <span className="contact-detail-label">
                    Email
                  </span>

                  <span className="contact-detail-value">
                    info@ratebothomes.com
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail">
                <div className="contact-icon">
                  <Phone
                    size={18}
                    color="#d97706"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="contact-detail-content">
                  <span className="contact-detail-label">
                    Phone
                  </span>

                  <span className="contact-detail-value">
                    +1 (555) 123-4567
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="contact-detail">
                <div className="contact-icon">
                  <MapPin
                    size={18}
                    color="#d97706"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="contact-detail-content">
                  <span className="contact-detail-label">
                    Address
                  </span>

                  <span className="contact-detail-value">
                    123 Luxury Boulevard, Metropolitan City
                  </span>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="office-hours">
              <h3 className="office-hours-title">
                Office Hours
              </h3>

              <p className="office-hours-text">
                Monday - Friday: 8:00 AM - 8:00 PM
                <br />
                Saturday: 9:00 AM - 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="contact-form-title">
              Send Us a Message
            </h3>

            <form className="contact-form">
              <input
                type="text"
                placeholder="Full name"
                className="contact-input"
                required
              />

              <input
                type="email"
                placeholder="Email address"
                className="contact-input"
                required
              />

              <textarea
                rows={3}
                placeholder="Your message"
                className="contact-input contact-textarea"
                required
              />

              <button
                type="submit"
                className="contact-submit"
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