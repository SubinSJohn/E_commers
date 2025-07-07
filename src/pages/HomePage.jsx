localStorage.setItem("role","hi");
import '../styling/HomePage.css';


// Mock Link component for demonstration
const Link = ({ to, className, children }) => (
  <a href={to} className={className}>{children}</a>
);

function HomePage() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">SalesSavvy</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/signin">Login</Link></li>
          </ul>
        </div>
      </nav>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Shop Smart, Shop <span className="highlight">Savvy</span>.
            </h1>
            <p className="hero-description">
              Discover products from top-rated, trusted sellers. Quality goods,
              unbeatable prices, and a smooth checkout experience — all in one place.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                <span className="btn-icon">🔍</span>
                Browse Products
              </Link>
              <Link to="/signin" className="btn btn-secondary">
                <span className="btn-icon">🔐</span>
                Login
              </Link>
              <Link to="/signup" className="btn btn-secondary">
                <span className="btn-icon">👤</span>
                Sign Up
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-content">
                <div className="product-image"></div>
                <div className="card-text">
                  <div className="card-title"></div>
                  <div className="card-price"></div>
                </div>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-content">
                <div className="product-image"></div>
                <div className="card-text">
                  <div className="card-title"></div>
                  <div className="card-price"></div>
                </div>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-content">
                <div className="product-image"></div>
                <div className="card-text">
                  <div className="card-title"></div>
                  <div className="card-price"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </header>

      {/* Why Choose Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SalesSavvy?</h2>
            <p>We believe smart shopping starts with trust and simplicity.</p>
          </div>
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">✅</div>
              <div className="feature-content">
                <h3>Top-Rated Sellers</h3>
                <p>All products are listed by verified sellers with proven customer satisfaction.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <div className="feature-content">
                <h3>Reliable Delivery</h3>
                <p>Fast, trackable shipping so you know exactly when to expect your items.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💳</div>
              <div className="feature-content">
                <h3>Secure Checkout</h3>
                <p>Your data is safe. Your payments are encrypted and processed securely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="difference">
        <div className="container">
          <div className="difference-content">
            <div className="difference-text">
              <h2>What Makes Us Different?</h2>
              <p>
                We're not just another marketplace. SalesSavvy puts your experience first.
                We highlight only the best-rated sellers, ensure every transaction is smooth,
                and offer curated products with genuine reviews. Our modern, user-friendly
                design means you spend less time browsing and more time enjoying what you buy.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">99%</span>
                  <span className="stat-label">Satisfaction Rate</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
            <div className="difference-visual">
              <div className="visual-element"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>"Fast delivery, great price, and the product was just as shown!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <span className="author-name">Amit</span>
                    <span className="author-location">Bangalore</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>"I've ordered multiple times — smooth experience every time."</p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <span className="author-name">Sneha</span>
                    <span className="author-location">Chennai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>SalesSavvy</h3>
              <p>Shop Smart, Shop Savvy.</p>
            </div>
            <div className="footer-links">
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 SalesSavvy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .home-container {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-text {
          color: white;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .highlight {
          background: linear-gradient(45deg, #ff6b6b, #feca57);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-primary {
          background: linear-gradient(45deg, #ff6b6b, #feca57);
          color: white;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        /* Hero Visual */
        .hero-visual {
          position: relative;
          height: 400px;
        }

        .floating-card {
          position: absolute;
          width: 180px;
          height: 220px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          padding: 20px;
          animation: float 6s ease-in-out infinite;
        }

        .card-1 {
          top: 0;
          left: 0;
          animation-delay: 0s;
        }

        .card-2 {
          top: 50px;
          right: 20px;
          animation-delay: 2s;
        }

        .card-3 {
          bottom: 0;
          left: 80px;
          animation-delay: 4s;
        }

        .product-image {
          width: 100%;
          height: 120px;
          background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
          border-radius: 15px;
          margin-bottom: 15px;
        }

        .card-title {
          height: 12px;
          background: #e0e0e0;
          border-radius: 6px;
          margin-bottom: 8px;
        }

        .card-price {
          height: 8px;
          background: #f0f0f0;
          border-radius: 4px;
          width: 60%;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        /* Background Elements */
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: pulse 4s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #ff6b6b, #feca57);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #74b9ff, #0984e3);
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(45deg, #fd79a8, #e17055);
          bottom: 20%;
          left: 70%;
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        /* Features Section */
        .features {
          padding: 100px 0;
          background: #f8f9fa;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #2d3748;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #718096;
          max-width: 600px;
          margin: 0 auto;
        }

        .feature-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 30px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
        }

        .feature-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #2d3748;
        }

        .feature-content p {
          color: #718096;
          line-height: 1.6;
        }

        /* Difference Section */
        .difference {
          padding: 100px 0;
          background: white;
        }

        .difference-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .difference-text h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #2d3748;
        }

        .difference-text p {
          font-size: 1.1rem;
          color: #718096;
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #718096;
          font-size: 0.9rem;
        }

        .difference-visual {
          position: relative;
          height: 400px;
        }

        .visual-element {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
        }

        .visual-element::before {
          content: '';
          position: absolute;
          top: 20%;
          left: 20%;
          width: 60%;
          height: 60%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        /* Testimonials Section */
        .testimonials {
          padding: 100px 0;
          background: #f8f9fa;
        }

        .testimonials h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 60px;
          color: #2d3748;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .testimonial {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .testimonial:hover {
          transform: translateY(-5px);
        }

        .stars {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .testimonial-content p {
          font-size: 1.1rem;
          color: #4a5568;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 50%;
        }

        .author-name {
          font-weight: 600;
          color: #2d3748;
        }

        .author-location {
          color: #718096;
          font-size: 0.9rem;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        /* Footer */
        .footer {
          background: #2d3748;
          color: white;
          padding: 60px 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .footer-brand p {
          color: #a0aec0;
        }

        .footer-links ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }

        .footer-links a {
          color: #a0aec0;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #4a5568;
          color: #a0aec0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .difference-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .stats {
            grid-template-columns: repeat(3, 1fr);
          }

          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-links ul {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .feature-list {
            grid-template-columns: 1fr;
          }

          .stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default HomePage;