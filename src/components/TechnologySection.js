import { Link } from 'react-router-dom';

const TechnologySection = () => {
  return (
    <div className="technology-section">
      <div className="technology-section-container">
        <div className="technology-section-card">
          <Link to="/technology/4LSKHGhk9o9xcDAvuv7W">
            <div className="image-wrapper">
              <img
                src="https://avologi.com/wp-content/uploads/2022/06/avologi-ENEO-TOTALE%CC%81-homepage-product-2.jpg"
                alt="ENEO TOTALÉ"
              />
            </div>
            <h3>ENEO TOTALÉ</h3>
            <p>
              An advanced anti-aging ritual that reveals smoother, more
              radiant-looking skin. With TOTALÉ you can continue to use your
              favorite skin care products. TOTALE helps in revealing a
              wrinkle-less, smoother looking complexion.
            </p>
            <p>$11,950</p>
          </Link>
        </div>
        <div className="technology-section-card">
          <Link to="/technology/7CjSZDkYUbt2Km2g5JSU">
            <div className="image-wrapper">
              <img
                src="https://avologi.com/wp-content/uploads/2023/06/avologi-Toatla-BLU-homepage-product-2.jpg"
                alt="ENEO TOTALÉ BLU"
              />
            </div>
            <h3>ENEO TOTALÉ BLU</h3>
            <p>
              An advanced, home-use hand-held medical device with a unique
              applicator tip that can be used with any skincare that makes use
              of the blue light spectrum which was found as the most efficient
              wavelength for imperfections and acne.
            </p>
            <p>$11,950</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
