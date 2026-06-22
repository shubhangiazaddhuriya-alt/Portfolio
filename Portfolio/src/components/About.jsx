import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <p className="about-text">
            I'm a passionate front-end developer and designer with a fresh perspective on creating beautiful, 
            functional web experiences. As a fresher, I bring enthusiasm, dedication, and a strong commitment 
            to learning and growing in the tech industry. I specialize in building responsive, user-centric 
            interfaces using modern web technologies.
          </p>
          
          <div className="approach-grid">
            <div className="approach-card">
              <div className="card-icon">💡</div>
              <h3>Creative Solutions</h3>
              <p>I approach every project with innovative ideas and fresh perspectives to solve complex problems.</p>
            </div>
            
            <div className="approach-card">
              <div className="card-icon">🎨</div>
              <h3>Design Focus</h3>
              <p>Every pixel counts. I create visually stunning interfaces that users love to interact with.</p>
            </div>
            
            <div className="approach-card">
              <div className="card-icon">⚡</div>
              <h3>Performance</h3>
              <p>I optimize for speed and efficiency, ensuring fast loading times and smooth user experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
