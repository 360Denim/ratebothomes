import './Footer.css';

const socialLinks = [
  { label: 'Instagram', icon: 'IG' },
  { label: 'Facebook', icon: 'FB' },
  { label: 'LinkedIn', icon: 'in' },
];

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          {/* Section 1 - Brand */}
          <div className="footer-brand-section">
            <a href="#hero" className="footer-brand">
              <div className="footer-brand-icon">R</div>

              <span className="footer-brand-name">
                RateBot Homes
              </span>
            </a>

            <p className="footer-description">
              Experience warm hospitality, thoughtfully designed spaces, and
              memorable stays. RateBot Homes brings comfort and modern living
              together for every traveler.
            </p>

            {/* Social Links */}
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="footer-social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2 - Quick Links */}
          <div className="footer-links-section">
            <h3 className="footer-heading">
              Quick Links
            </h3>

            <nav className="footer-links">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Section 3 - Contact */}
          <div className="footer-contact-section">
            <h3 className="footer-heading">
              Contact Us
            </h3>

            <div className="footer-contact-details">
              {/* Address */}
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  📍
                </span>

                <div>
                  <span className="footer-contact-label">
                    Address
                  </span>

                  <span className="footer-contact-value">
                    Jaipur, Rajasthan, India
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  ☎
                </span>

                <div>
                  <span className="footer-contact-label">
                    Phone
                  </span>

                  <a
                    href="tel:+919999999999"
                    className="footer-contact-link"
                  >
                    +91 99999 99999
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  ✉
                </span>

                <div>
                  <span className="footer-contact-label">
                    Email
                  </span>

                  <a
                    href="mailto:info@ratebothomes.com"
                    className="footer-contact-link"
                  >
                    info@ratebothomes.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 RateBot Homes. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link">
              Privacy Policy
            </a>

            <a href="#" className="footer-legal-link">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;