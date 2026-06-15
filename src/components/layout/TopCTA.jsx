import { ReactComponent as LocationIcon } from '../../assets/svg/location.svg';
import { ReactComponent as CallIcon } from '../../assets/svg/call.svg';

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
