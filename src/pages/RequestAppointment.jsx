import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const FORM_ID = 'EMUf9048mTwP1nAlzeyv';
const EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js';

const RequestAppointment = () => {
  useEffect(() => {
    // Resizes the form iframe to its content height.
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
    const s = document.createElement('script');
    s.src = EMBED_SCRIPT;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="policy-page">
      <div className="policy-container">
        <h2>Request an Appointment</h2>
        <p>
          Tell us which treatment you'd like and when, and Ora Sempre Spa
          Annapolis will contact you to confirm. You can also call us at{' '}
          <a href="tel:+14105715489">(410) 571-5489</a>.
        </p>
        <p>
          Text messages are optional. If you check the SMS box, we only text
          you about your appointments and questions, never marketing. Reply STOP
          to opt out at any time. See our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>.
        </p>
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
          style={{ width: '100%', height: '1000px', border: 'none', borderRadius: '3px' }}
          id={`inline-${FORM_ID}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-activation-type="alwaysActivated"
          data-deactivation-type="neverDeactivate"
          data-form-name="SMS Opt-in - Appointment Request (A2P)"
          data-height="1000"
          data-layout-iframe-id={`inline-${FORM_ID}`}
          data-form-id={FORM_ID}
          title="Request an Appointment"
        />
      </div>
    </div>
  );
};

export default RequestAppointment;
