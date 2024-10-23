import { Link } from 'react-router-dom';
import Copyrights from './Copyrights';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h2>Ora Sempre</h2>
        <div className="visit-us">
          <h3>Location</h3>
          <p>
            216 Main St, Ste A
            <br />
            Annapolis, MD 21401
          </p>
          <p>(410) 571-5489</p>
          <p>
            Sun - Fri : 11 AM - 6 PM
            <br />
            Saturday : Closed
          </p>
        </div>
        <div className="footer-policies">
          <h3>Policies</h3>
          <Link to={'/privacy-policy'}>Privacy Policy</Link>
          <Link to={'/return-policy'}>Return Policy</Link>
          <Link to={'/return-policy'}>Exchange Policy</Link>
          <Link to={'/store-hours'}>Store Hours</Link>
        </div>
        <div className="navigation">
          <h3>Menu</h3>
          <Link to={'/collections'}>Skincare Collection</Link>
          <Link to={'/technology'}>Technology</Link>
          <Link to={'/treatments'}>Treatments</Link>
          <Link to={'/about'}>About</Link>
        </div>
        <div className="news-letter">
          <h3>Join Our News Letter!</h3>
          <label>Email Address:</label>
          <input type="email" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
      <Copyrights />
    </footer>
  );
};

export default Footer;
