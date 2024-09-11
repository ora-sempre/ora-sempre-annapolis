import { Link } from 'react-router-dom';
import noni from '../assets/website-images/ingredients/noni.png';
import mulberry from '../assets/website-images/ingredients/mulberry.png';
import reshi from '../assets/website-images/ingredients/reshi.png';

const Informative = () => {
  return (
    <div className="informative">
      <div className="informative-container">
        <div
          className="super-ingredients"
          style={{ backgroundImage: `url(${mulberry})` }}
        >
          <p>HYDRATING</p>
          <h3>MULBERRY</h3>
          <Link to="/" className="btn">
            LEARN MORE
          </Link>
        </div>
        <div
          className="super-ingredients noni"
          style={{ backgroundImage: `url(${noni})` }}
        >
          <p>RADIANCE</p>
          <h3>NONI EXTRACT</h3>
          <Link to="/" className="btn">
            SUPERFOOD INGREDIENTS
          </Link>
        </div>
        <div
          className="super-ingredients"
          style={{ backgroundImage: `url(${reshi})` }}
        >
          <p>COMPLEXION</p>
          <h3>RESHI EXTRACT</h3>
          <Link to="/" className="btn">
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Informative;
