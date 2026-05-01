import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="social-links">
          <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
          <a href="#" aria-label="Twitter"><FaTwitter size={24} /></a>
          <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </footer>
  );
}
