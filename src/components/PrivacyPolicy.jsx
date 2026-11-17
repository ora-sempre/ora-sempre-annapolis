import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h2>Privacy Policy</h2>

        <p>
          This Privacy Policy outlines how we collect, use, and protect your
          personal information when you visit our website orasempreannapolis.com
          or communicate with Ora Sempre Spa Annapolis, operated by Gachel LLC,
          216 Main St, Suite A, Annapolis, MD 21401.
        </p>
        <h3>Information We Collect</h3>
        <p>
          We may collect personal information, including but not limited to,
          your name, email address, phone number, and browsing activity on our
          website.
        </p>
        <h3>How We Use Your Information</h3>
        <p>
          We use the collected information to:
          <ul>
            <li>- Provide and personalize our services</li>
            <li>- Communicate with you</li>
            <li>- Improve our website's functionality and user experience</li>
            <li>- Analyze website traffic and trends</li>
          </ul>
        </p>
        <h3>Data Security</h3>
        <p>
          We prioritize the security of your personal information and employ
          industry-standard measures to protect it from unauthorized access,
          disclosure, alteration, or destruction.
        </p>
        <h3>Third-Party Disclosure</h3>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties unless we provide you with advance notice or as
          required by law.
        </p>
        <h3>Text Messaging (SMS)</h3>
        <p>
          If you give us your mobile number and opt in, we use it only to send
          appointment confirmations, reminders, rescheduling notices and replies
          to your questions. We do not send marketing text messages. Message
          frequency varies. Message and data rates may apply. Reply STOP to opt
          out or HELP for help at any time.
        </p>
        <p>
          No mobile information will be shared with third parties or affiliates
          for marketing or promotional purposes. Text messaging originator
          opt-in data and consent will not be shared with any third parties.
          This excludes service providers that help us deliver our text
          messages (for example our messaging platform and mobile carriers).
          See our <Link to="/terms">Terms &amp; Conditions</Link> for the full
          SMS terms.
        </p>
        <h3>Cookies</h3>
        <p>
          Our website may use cookies to enhance your browsing experience. You
          can choose to disable cookies in your browser settings, although this
          may affect certain functionalities of the website.
        </p>
        <h3>Consent</h3>
        <p>
          By using our website, you consent to our Privacy Policy and agree to
          its terms.
        </p>
        <h3>Updates to Privacy Policy</h3>
        <p>
          We reserve the right to update our Privacy Policy at any time. Any
          changes will be posted on this page, and the revised date will be
          indicated at the top of the page.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns regarding our Privacy Policy,
          please contact us at avinichics@gmail.com
        </p>
        <p>Last Updated: November 2026</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
