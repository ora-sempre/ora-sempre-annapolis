import { Link } from 'react-router-dom';
import noni from '../assets/website-images/bg-images/pytho-collection-bg.png';
import mulberry from '../assets/website-images/bg-images/mulberry-collection-bg.png';
import thermal from '../assets/website-images/bg-images/thermal-collection-bg.png';
import camucamu from '../assets/website-images/bg-images/camucamu-collection-bg.png';

const Collections = () => {
  return (
    <div className="collections">
      <h2>Our Skincare Collections</h2>
      <div className="collections-container">
        <Link to="/collection/noni">
          <div
            className="collections-card"
            style={{ background: `url(${noni})` }}
          >
            <div className="collections-text">
              <h3>Noni Collection</h3>
              <p>PHENOMENAL LIFTING AND FIRMING</p>
              <p>
                Nourishing daily essentials infused with Noni extract for
                radiant skin. From Day Cream to Peeling Gel, indulge in
                hydration and vitality with every use.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/collection/mulberry">
          <div
            className="collections-card"
            style={{ background: `url(${mulberry})` }}
          >
            <div className="collections-text">
              <h3>Mulberry Collection</h3>
              <p>RADIANCE RE-IGNITED</p>
              <p>
                Intensive repair treatments featuring Reishi Mushroom's healing
                prowess. Experience revitalization with our Phyto Thermal
                Collection and combat fine lines with Fine Line Filler.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/collection/reishi">
          <div
            className="collections-card"
            style={{ background: `url(${thermal})` }}
          >
            <div className="collections-text">
              <h3>Reishi Collection</h3>
              <p>THE MOST SCIENTIFICALLY ADVANCED SKINCARE</p>
              <p>
                Illuminate with Vitamin C and Mulberry extract. From Vitamin C
                Serum to Overnight Mask, revitalize dull skin for a luminous,
                hydrated complexion.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/collection/camu-camu">
          <div
            className="collections-card"
            style={{ background: `url(${camucamu})` }}
          >
            <div className="collections-text">
              <h3>Camu Camu Collection</h3>
              <p>BRIGHTENING AND HYDRATING</p>
              <p>
                Specially formulated for the delicate skin around your eyes,
                these products are designed to brighten, de-puff, and smooth out
                the appearance of your skin. This collection will leave your eye
                area looking decades younger.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Collections;
