import { Link } from 'react-router-dom';

const Copyrights = () => {
  const footerYear = new Date().getFullYear();
  return (
    <div className="copyrights">
      {footerYear} All Rights Reserved to Ora Sempre |{' '}
      <Link to="/credits">Website Credits</Link>
    </div>
  );
};

export default Copyrights;
