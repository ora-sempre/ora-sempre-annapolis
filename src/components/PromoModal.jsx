import React, { useState, useEffect } from "react";
import "./PromoModal.scss";
const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);
  const closeModal = () => {
    setIsOpen(false);
  };
  if (!isOpen) {
    return null;
  }
  return (
    <div className="promo-modal-overlay">
      <div className="promo-modal">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2>Special Promotion!</h2>
        <p>
          For first-time customers only: Enjoy our Signature Anti-Aging + Collagen Booster Facial for just <strong>$99.99</strong>.
        </p>
        <a
          href="https://booking.orasempreannapolis.com/antiagingnew-special-lp1"
          target="_blank"
          rel="noreferrer"
          className="promo-link"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};
export default PromoModal;