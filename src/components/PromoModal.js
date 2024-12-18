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
          For first-time customers only: Enjoy our Signature Anti-Aging + Collagen Booster Facial for just <strong>$79.99</strong>.
        </p>
        <a
          href="https://booking.orasempreannapolis.com/secdule-orasempre-antiaging?sessionId=f6512871-a10d-4205-8481-31df7768f203&trigger_link=R2IdeW1jBD0UpAJsrOBd"
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