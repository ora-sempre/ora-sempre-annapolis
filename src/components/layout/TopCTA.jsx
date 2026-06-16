import LocationIcon from '../../assets/svg/location.svg?react';
import CallIcon from '../../assets/svg/call.svg?react';

const TopCTA = () => {
  return (
    <div className="topCTA">
      <div className="navbar-container">
        <ul className="ul-row">
          <li>
            <CallIcon className="svg-icon" />
          </li>
          <li>(410) 571-5489</li>
          <li className="address-icon">
            <LocationIcon className="svg-icon" />
          </li>
          <li className="address-text">
            216 Main st, Suite A, Annapolis, MD, 21401
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopCTA;
