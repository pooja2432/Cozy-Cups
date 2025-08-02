import React, { useState } from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { BsFillCupHotFill } from "react-icons/bs";
import ContactPopup from './ContactPopup';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="bg-[#FDFAEF]" id="contact">
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-info">
              <div className="logo">
                <p className="text-[18px]">Cozy</p>
                <BsFillCupHotFill size={20} />
                <p className="text-[18px]">Cups</p>
              </div>
              <h2 className="footer-title">Your perfect coffee break starts here.</h2>

              <div className="footer-section">
                <h4>Opening hours:</h4>
                <p>Mon - Thu: 11:00 AM - 9:00 PM</p>
                <p>Fri - Sat: 11:00 AM - 10:00 PM</p>
                <p>Sun: 12:00 PM - 8:00 PM</p>
              </div>

              <div className="footer-section">
                <h4>Phone:</h4>
                <p>+91 93346 84253</p>
              </div>

              <div className="footer-section">
                <h4>Location:</h4>
                <p>Cozy Cups</p>
                <p>123 Brew Lane</p>
                <p>Noida, Sector 15</p>
              </div>

              <div className="social-icons">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>

              {/* Contact link*/}
              <p className="contact-text" onClick={() => setShowPopup(true)}>
                Contact Us
              </p>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-map">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.50123950336!2d77.23701327269157!3d28.52210234975202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753308650047!5m2!1sen!2sin" 
                width="100%"
                height="490"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="auto"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="footer-bottom">
            <p>2025 — TheCozyCups@pooja</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Popup Form */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Footer;
