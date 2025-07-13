import "../styling/InfoPages.css";

function Contact() {
  return (
    <div className="info-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, suggestions, or issues, we're here to help!</p>
      <ul>
        <li>Email: <strong>support@sales-savvy.com</strong></li>
        <li>Phone: <strong>+91 98765 43210</strong></li>
        <li>Office: 123 Market Street, Bengaluru, Karnataka, 560001</li>
      </ul>
      <p>We typically respond within 1-2 business days.</p>
    </div>
  );
}

export default Contact;