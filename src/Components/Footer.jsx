import '../App.css';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <ul className="list">
        <li className="item">
          <a href="/about" className="link">About Us</a>
        </li>
        <li className="item">
          <a href="/contact" className="link">Contact</a>
        </li>
        <li className="item">
          <a href="/terms" className="link">Terms of Service</a>
        </li>
        <li className="item">
          <a href="/privacy" className="link">Privacy Statement</a>
        </li>
        <li className="item">
          <a href="/blog" className="link">Blog</a>
        </li>
        <li className="item">
          <a href="/support" className="link">Support</a>
        </li>
      </ul>
      </div>
    </footer>
  );
}

export default Footer;
