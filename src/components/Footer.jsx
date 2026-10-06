
const Footer = () => {
  return (
    <footer
      style={{
        background: "#1e293b",
        color: "#f8fafc",
        borderTop: "1px solid #334155",
        padding: "4rem 0 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Main Footer */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1.5fr",
            gap: "4rem",
            paddingBottom: "3rem",
          }}
        >
          {/* Section 1 - Brand */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <a
              href="#hero"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#f8fafc",
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "#d97706",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                R
              </div>

              <span
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                }}
              >
                RateBot Homes
              </span>
            </a>

            <p
              style={{
                maxWidth: "430px",
                margin: 0,
                color: "#94a3b8",
                fontSize: "0.95rem",
                lineHeight: 1.8,
              }}
            >
              Experience warm hospitality, thoughtfully designed spaces, and
              memorable stays. RateBot Homes brings comfort and modern living
              together for every traveler.
            </p>

            {/* Social Links */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "0.5rem",
              }}
            >
              {[
                { label: "Instagram", icon: "IG" },
                { label: "Facebook", icon: "FB" },
                { label: "LinkedIn", icon: "in" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#334155",
                    color: "#f8fafc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    transition:
                      "background 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#d97706";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#334155";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2 - Quick Links */}
          <div>
            <h3
              style={{
                margin: "0 0 1.25rem",
                color: "#f8fafc",
                fontSize: "0.95rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Quick Links
            </h3>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              {[
                { label: "Home", href: "#hero" },
                { label: "About Us", href: "#about" },
                { label: "Rooms", href: "#rooms" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "#94a3b8",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.3s ease, transform 0.3s ease",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#d97706";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Section 3 - Contact */}
          <div>
            <h3
              style={{
                margin: "0 0 1.25rem",
                color: "#f8fafc",
                fontSize: "0.95rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Contact Us
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.15rem",
              }}
            >
              {/* Address */}
              <div
                style={{
                  display: "flex",
                  gap: "0.9rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    minWidth: "32px",
                    borderRadius: "8px",
                    background: "#334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#d97706",
                    fontSize: "0.9rem",
                  }}
                >
                  📍
                </span>

                <div>
                  <span
                    style={{
                      display: "block",
                      color: "#f8fafc",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      marginBottom: "0.2rem",
                    }}
                  >
                    Address
                  </span>

                  <span
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    
                    Jaipur, Rajasthan, India
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div
                style={{
                  display: "flex",
                  gap: "0.9rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    minWidth: "32px",
                    borderRadius: "8px",
                    background: "#334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#d97706",
                    fontSize: "0.9rem",
                  }}
                >
                  ☎
                </span>

                <div>
                  <span
                    style={{
                      display: "block",
                      color: "#f8fafc",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      marginBottom: "0.2rem",
                    }}
                  >
                    Phone
                  </span>

                  <a
                    href="tel:+919999999999"
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    +91 99999 99999
                  </a>
                </div>
              </div>

              {/* Email */}
              <div
                style={{
                  display: "flex",
                  gap: "0.9rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    minWidth: "32px",
                    borderRadius: "8px",
                    background: "#334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#d97706",
                    fontSize: "0.9rem",
                  }}
                >
                  ✉
                </span>

                <div>
                  <span
                    style={{
                      display: "block",
                      color: "#f8fafc",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      marginBottom: "0.2rem",
                    }}
                  >
                    Email
                  </span>

                  <a
                    href="mailto:info@ratebothomes.com"
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    info@ratebothomes.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #334155",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "0.8rem",
            }}
          >
            © 2026 RateBot Homes. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
            }}
          >
            <a
              href="#"
              style={{
                color: "#64748b",
                textDecoration: "none",
                fontSize: "0.8rem",
              }}
            >
              Privacy Policy
            </a>

            <a
              href="#"
              style={{
                color: "#64748b",
                textDecoration: "none",
                fontSize: "0.8rem",
              }}
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 900px) {
            footer > div > div:first-child {
              grid-template-columns: 1fr 1fr !important;
              gap: 3rem !important;
            }
          }

          @media (max-width: 600px) {
            footer {
              padding-top: 3rem !important;
            }

            footer > div {
              padding-left: 1.25rem !important;
              padding-right: 1.25rem !important;
            }

            footer > div > div:first-child {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }

            footer > div > div:last-child {
              flex-direction: column !important;
              align-items: flex-start !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
