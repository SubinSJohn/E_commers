import "../styling/InfoPages.css";

function PrivacyPolicy() {
  return (
    <div className="info-container">
      <h1>Privacy Policy</h1>
      <p>We respect your privacy and are committed to protecting your personal information.</p>

      <h2>1. Information Collection</h2>
      <p>
        We collect your name, email, phone number, and order data when you sign up or make purchases.
        This helps us provide better service and personalize your experience.
      </p>

      <h2>2. How We Use Data</h2>
      <p>
        Your data is used for order processing, communication, and marketing (only if you consent).
        We do not sell or share your information with third parties without permission.
      </p>

      <h2>3. Cookies</h2>
      <p>
        We use cookies to improve your browsing experience. You can control cookie settings through
        your browser.
      </p>

      <h2>4. Data Security</h2>
      <p>We use secure servers and encrypted storage to keep your information safe.</p>

      <h2>5. Updates</h2>
      <p>
        We may update this policy. Continued use of SalesSavvy means you accept the latest version.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
