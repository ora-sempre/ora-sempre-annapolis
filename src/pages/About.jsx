import aboutImage from '../assets/website-images/about.jpg';

import './About.scss';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-title">
        <h2>Discover the Next Generation of Anti-Aging at Ora Sempre</h2>
        <p>
          At <strong>Ora Sempre</strong>, with over 200 locations worldwide, we specialize in cutting-edge, non-invasive anti-aging treatments designed to help you achieve the youthful, radiant skin you deserve. We believe in personal attention for every client, providing expert care and guidance tailored to your unique skincare needs.
        </p>
        <p>
          Our offerings include a range of rejuvenating facials, advanced anti-aging therapies, and the latest in red and blue light technology—proven to restore and revitalize skin without surgery. We’re here to support your skincare journey with a commitment to holistic wellness, combining natural solutions with the latest innovations in beauty.
        </p>
        </div>
        <div
          className="about-image"
          style={{ background: `url(${aboutImage})` }}
        ></div>
      </div>

      <div className="about-text">
      <h2>Avinichi: Your Skincare Companion</h2>
      <p>
        Central to our approach is <strong>Avinichi</strong>, a skincare collection that embraces the power of distinguished superfood ingredients. Whether you're looking to reduce wrinkles, soothe sensitive skin, or simply enhance your daily skincare routine, Avinichi offers a variety of solutions crafted for your individual concerns.
      </p>
      <p>
        From essential day-to-day care to transformative anti-aging formulas, Avinichi brings together the finest ingredients to improve both the appearance and function of your skin.
      </p>
      <p>
        At Ora Sempre, skincare is more than just a routine—it’s a journey. With us, you’ll find a personalized experience that embraces your unique beauty and empowers your skin to look and feel its best.
      </p>
        <h3> Ora Sempre </h3>
        <h4>
          216 Main st, Suite A, Annapolis, MD, 21401
        </h4>
        <h4>
          (410) 571-5489
        </h4>
      </div>
    </div>
  );
};

export default About;
