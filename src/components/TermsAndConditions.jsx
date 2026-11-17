import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h2>Terms &amp; Conditions</h2>

        <p>
          These Terms &amp; Conditions apply to orasempreannapolis.com and to
          services provided by Ora Sempre Spa Annapolis, operated by Gachel LLC
          (&quot;Ora Sempre&quot;, &quot;we&quot;, &quot;us&quot;), 216 Main St,
          Suite A, Annapolis, MD 21401. By using this website, booking an
          appointment or opting in to our text messages, you agree to these
          terms.
        </p>

        <h3>Text Messaging (SMS) Terms</h3>
        <p>
          <strong>Program:</strong> Ora Sempre Spa Annapolis appointment and
          customer care text messages.
        </p>
        <p>
          <strong>What you will receive:</strong> appointment booking
          confirmations, reminders before your facial or other treatment,
          rescheduling or cancellation notices, and replies to questions you
          send us (for example our address, hours or how to prepare for a
          treatment). We do not send marketing or promotional text messages.
        </p>
        <p>
          <strong>How you opt in:</strong> by checking the optional SMS consent
          box when you book online, or by texting us first. Consent to receive
          text messages is not a condition of any purchase or booking.
        </p>
        <p>
          <strong>Age:</strong> you must be 18 or older to opt in to our text
          messages.
        </p>
        <p>
          <strong>Message frequency:</strong> varies with your appointments and
          questions.
        </p>
        <p>
          <strong>Cost:</strong> message and data rates may apply, according to
          your mobile plan.
        </p>
        <p>
          <strong>Opt out:</strong> reply <strong>STOP</strong> to any message
          at any time. We will send one confirmation that you have been
          unsubscribed and no further texts unless you opt in again.
        </p>
        <p>
          <strong>Help:</strong> reply <strong>HELP</strong> to any message, call
          us at (410) 571-5489, or email avinichics@gmail.com.
        </p>
        <p>
          Mobile carriers are not liable for delayed or undelivered messages.
          Your mobile number and SMS opt-in information are never sold or shared
          with third parties or affiliates for their marketing purposes. See our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> for details.
        </p>

        <h3>Appointments</h3>
        <p>
          Appointments can be booked online, by phone or in person. Please
          contact us as early as possible if you need to reschedule or cancel.
        </p>

        <h3>Purchases, Refunds and Exchanges</h3>
        <p>
          Purchases of products and treatments are covered by our{' '}
          <Link to="/return-policy">Return &amp; Exchange Policy</Link>.
        </p>

        <h3>Use of This Website</h3>
        <p>
          The content on this website is provided for general information about
          our spa, treatments and products. It is not medical advice. Prices,
          offers and availability may change without notice.
        </p>

        <h3>Changes to These Terms</h3>
        <p>
          We may update these Terms &amp; Conditions from time to time. Changes
          are posted on this page with a new date below.
        </p>

        <h3>Contact Us</h3>
        <p>
          Ora Sempre Spa Annapolis (Gachel LLC), 216 Main St, Suite A,
          Annapolis, MD 21401 · (410) 571-5489 · avinichics@gmail.com
        </p>
        <p>Last Updated: November 2026</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
