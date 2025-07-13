import "../styling/TermsAndService.css";

function TermsAndService() {
  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p className="updated">Last updated: July 7, 2025</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using SalesSavvy, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
        </p>
      </section>

      <section>
        <h2>2. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility.
        </p>
      </section>

      <section>
        <h2>3. Product Information</h2>
        <p>
          We try to ensure all product details are accurate. However, we do not guarantee the accuracy or completeness of the information.
        </p>
      </section>

      <section>
        <h2>4. Payments</h2>
        <p>
          All transactions are processed securely. By placing an order, you agree to pay the listed price plus any applicable taxes and shipping.
        </p>
      </section>

      <section>
        <h2>5. Returns and Refunds</h2>
        <p>
          You may request a return or refund under our Return Policy, provided the product meets the return conditions.
        </p>
      </section>

      <section>
        <h2>6. Account Termination</h2>
        <p>
          We reserve the right to suspend or terminate your account if we detect misuse, fraudulent activity, or violation of our policies.
        </p>
      </section>

      <section>
        <h2>7. Changes to Terms</h2>
        <p>
          We may update these Terms occasionally. Continued use of SalesSavvy means you accept any changes made.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          For any questions about these terms, contact us at <strong>support@sales-savvy.com</strong>.
        </p>
      </section>
    </div>
  );
}

export default TermsAndService;
