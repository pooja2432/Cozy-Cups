import React, { useEffect, useRef, useState } from 'react';
import { BsFillCupHotFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './Hero.css';
import HomePage from './HomePage';
import { Menu, X } from 'lucide-react'; // New import for hamburger icon

const Hero = () => {
  const h3Ref = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu toggle
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); 
    }
  };

  useEffect(() => {
    gsap.fromTo(
      h3Ref.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.3 }
    );

    const stars = document.querySelectorAll('.star svg');
    gsap.fromTo(
      stars,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power2.out" }
    );

    const btn = buttonRef.current;
    const handleHover = () => {
      gsap.fromTo(
        btn,
        { x: 0, rotate: 0 },
        { x: 2, rotate: 2, yoyo: true, repeat: 5, duration: 0.1 }
      );
    };

    btn.addEventListener('mouseenter', handleHover);
    return () => btn.removeEventListener('mouseenter', handleHover);
  }, []);

  return (
    <div className="hero flex flex-col gap-[50px]">
      {/* Nav */}
      <nav className="nav relative">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
          className="logo flex items-center gap-[5px]"
          aria-label="DVicious Brew Home"
        >
          <p>Cozy</p>
          <BsFillCupHotFill />
          <p>Cups</p>
        </a>

        
        {/* Desktop Menu */}
        <div className="nav-items hidden md:flex gap-6">
          <p onClick={() => scrollToSection("home")}>Home</p>
          <p onClick={() => scrollToSection("story")}>Our Story</p>
          <p onClick={() => scrollToSection("menu")}>Menu</p>
          <p onClick={() => scrollToSection("gallery")}>Gallery</p>
          <p onClick={() => scrollToSection("contact")}>Contact</p>
        </div>

      
      </nav>

      <HomePage />

      {/* Star Rating Section */}
      <div className="middle">
        <p className="google">Google:</p>
        <div className="star1 flex justify-center items-center gap-[7px]">
          <div className="star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="rating">(4.9)</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom text-center">
        <h3 ref={h3Ref}>Crafted to perfection, one brew at a time.</h3>
        <p>Where coffee, pastries, and great moments brew together!</p>
        <button
          ref={buttonRef}
          onClick={() => scrollToSection("menu")}
          aria-label="Discover Our Menu"
        >
          Discover Our Menu
        </button>
      </div>
    </div>
    
  );
};

export default Hero;
