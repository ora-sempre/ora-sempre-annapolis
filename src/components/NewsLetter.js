import './Newsletter.scss';
import heroImage from '../assets/newsletter/hero-image.png';
import sectionImage from '../assets/newsletter/section-image.jpg';
import img1 from '../assets/newsletter/w1.png';
import img2 from '../assets/newsletter/w2.png';
import img3 from '../assets/newsletter/w3.png';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="page-content">
        <div className="newsletter-head">
          <h3>KAMEA</h3>
          <p>(505) 983-9774</p>
          <p>208 W San Francisco St, Ste B, Santa Fe, NM 87501</p>
        </div>
        <div className="newsletter-hero">
          <div className="hero-text">
            <h1>AVINICHI’S COLLECTION PROMOTION</h1>
            <h2>
              Make sure to regularly check out newsletter to keep updated about
              skincare perks and deals. Let’s get glowing with a{' '}
              <b> 30% discount for this week! </b> use <br /> promo code:{' '}
              <b> MAY30</b>
            </h2>
            <button className="hero-btn">Explore Collection</button>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Avinechi" />
          </div>
        </div>

        <div className="newsletter-section">
          <div className="section-image">
            <img src={sectionImage} alt="Avinichi" />
          </div>
          <div className="section-text">
            <h2>The Unique Nature of the Skin Around Your Eyes</h2>
            <br />
            <p>
              As a brand that focuses on superfoods and the insurmountable
              benefits they can deliver to your skin, Avinichi’s exclusive Eye
              Care Collection won’t leave you disappointed. You’ll find some
              exemplary ingredients in all our products that will feed your skin
              just what it craves.
            </p>
          </div>
        </div>

        <div className="newsletter-products">
          <h2>How to Use Avinichi’s Eye Care Products</h2>
          <div className="product-grid">
            <div className="product-item">
              <div className="image-wrapper">
                <img src={img1} alt="skincare" />
              </div>
              <h3>Ensure Cleanliness</h3>
              <p>
                Bacteria on your skin can do a lot of harm. For the skin around
                your eyes, the adverse effects would be doubled. So, whenever
                your hands come into contact with your skin to apply makeup or
                skincare products make sure they’re freshly cleaned.
              </p>
              <button className="product-btn">Read More</button>
            </div>
            <div className="product-item">
              <div className="image-wrapper">
                <img src={img2} alt="skincare" />
              </div>
              <h3>Light to Heavy Rule</h3>
              <p>
                Always apply your products in the right order from the lightest
                consistency to the heaviest. So, serums go before creams.
              </p>
              <button className="product-btn">Read More</button>
            </div>
            <div className="product-item">
              <div className="image-wrapper">
                <img src={img3} alt="skincare" />
              </div>
              <h3>Apply with ring finger</h3>
              <p>
                Make it a habit to apply eye care products using only your ring
                finger. This way, you exert the least amount of pressure on the
                delicate skin around your eyes.
              </p>
              <button className="product-btn">Read More</button>
            </div>
          </div>
        </div>
        <div className="newsletter-footer">
          <p>
            Get a Brighter-Looking Eye Area with Avinichi’s Eye Care Collection.
            Visit our website on: www.KAMEA.com
          </p>
          <p>
            If you no longer wish to receive these emails, you may{' '}
            <u>unsubscribe</u> {''}
            here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
