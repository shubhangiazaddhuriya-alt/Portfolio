import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Shubhangi Dhuriya</h3>
            <p>Frontend Developer & Designer</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/shubhangiazaddhuriya-alt" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/shubhangiazaddhuriya" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:shubhangiazaddhuriya@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Shubhangi Dhuriya. All rights reserved.</p>
          <p>Built with React & Vite ⚡</p>
        </div>
      </div>
    </footer>
  );
}
