import React, { useState } from 'react';
import './Navbar.css';
import { Menu, X } from 'lucide-react'; // Hamburger and Close icons
import { Link } from 'react-router-dom';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Cozy Cups</div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {/* Mobile Menu (hamburger opened state) */}
<ul className="mobile-nav-items md:hidden flex flex-col gap-4">
  <li onClick={() => scrollToSection("home")}>Home</li>
  <li onClick={() => scrollToSection("story")}>Our Story</li>
  <li onClick={() => scrollToSection("menu")}>Menu</li>
  <li onClick={() => scrollToSection("gallery")}>Gallery</li>
  <li onClick={() => scrollToSection("contact")}>Contact</li>
</ul>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
