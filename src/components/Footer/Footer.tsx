import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top row */}
        <div className="footer-top">
          {/* Logo */}
          <div className="footer-logo">LUYU</div>

          {/* Sections */}
          <div className="footer-sections">
            <div className="footer-section">
              <h3>Product</h3>
              <ul>
                <li><a href="/#overview">Overview</a></li>
                <li><a href="/pricing">Pricing</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/guide">Guide</a></li>
                <li><a href="/help">Help Center</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Socials */}
          {/* <div className="footer-social">
            <a href="https://instagram.com" aria-label="Instagram">📷</a>
            <a href="https://twitter.com" aria-label="Twitter">🐦</a>
            <a href="https://facebook.com" aria-label="Facebook">📘</a>
            <a href="https://github.com" aria-label="GitHub">💻</a>
          </div> */}
        </div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} LUYU. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
