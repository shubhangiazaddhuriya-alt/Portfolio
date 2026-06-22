import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlays">
        <span className="hero-circle hero-circle--large"></span>
        <span className="hero-circle hero-circle--small"></span>
        <span className="hero-line hero-line--top"></span>
        <span className="hero-line hero-line--bottom"></span>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label"> Full Stack Developer</span>
          <h1 className="hero-title">
            I create visually rich interfaces that feel modern, fast, and memorable.
          </h1>
          <p className="hero-description">
            Focused on building polished web experiences with strong visual hierarchy,
            motion, and responsive interactions that help early-career brands make a bold first impression.
          </p>

          <div className="hero-buttons">
            <a href={"/assets/Shubhangi_Dhuriya_Resume.pdf"} className="btn btn-primary" download>
              Download CV
            </a>
            <a href="#about" className="btn btn-secondary">Explore my work</a>
          </div>

          <div className="hero-highlights">
            <article className="hero-stat">
              <h3>02</h3>
              <p>Years learning UI craft</p>
            </article>
            <article className="hero-stat">
              <h3>3</h3>
              <p>Projects designed</p>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}
