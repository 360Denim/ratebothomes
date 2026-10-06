import { useState } from 'react';
import './Navbar.css';

const links = [
  { id: 'about', label: 'About' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <a href="#hero" className="navbar-brand" onClick={closeMenu}>
          <div className="navbar-brand-icon">R</div>

          <span className="navbar-brand-name">
            RateBot Homes
          </span>
        </a>

        {/* Desktop / Tablet Navigation */}
        <div className="navbar-navigation">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="navbar-link"
            >
              {link.label}
            </a>
          ))}

          <a href="#booking" className="navbar-book-button">
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`navbar-menu-button ${
            isMenuOpen ? 'navbar-menu-button-open' : ''
          }`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`navbar-mobile-overlay ${
          isMenuOpen ? 'navbar-mobile-overlay-visible' : ''
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <div
        className={`navbar-mobile-drawer ${
          isMenuOpen ? 'navbar-mobile-drawer-open' : ''
        }`}
      >
        <div className="navbar-mobile-drawer-header">
          <span className="navbar-mobile-drawer-title">
            Menu
          </span>

          <button
            type="button"
            className="navbar-mobile-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="navbar-mobile-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="navbar-mobile-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#booking"
            className="navbar-mobile-book-button"
            onClick={closeMenu}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;