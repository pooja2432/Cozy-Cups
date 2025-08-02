import React from "react";
import ContactForm from "./ContactForm";
import "./ContactPopup.css";

const ContactPopup = ({ isOpen, onClose }) => {
  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`}>
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>✖</button>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPopup;
