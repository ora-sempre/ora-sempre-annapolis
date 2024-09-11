import { Link } from 'react-router-dom';
import noni from '../assets/website-images/noni.png';
import camu from '../assets/website-images/camu.png';

const SecondInformative = () => {
  return (
    <div className="second-informative">
      <div className="second-container">
        <div className="collection" style={{ backgroundImage: `url(${noni})` }}>
          <h3>NONI COLLECTION</h3>
          <Link to="/collection/noni" className="btn">
            EXPLORE COLLECTION
          </Link>
        </div>
        <div className="collection" style={{ backgroundImage: `url(${camu})` }}>
          <h3>SKINCARE INFUSED</h3>
          <Link to="/ingredients" className="btn">
            EXPLORE INGREDIENTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondInformative;
