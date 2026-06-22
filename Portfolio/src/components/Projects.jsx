import "../styles/Projects.css";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Portfolio Website (React & Frontend)",
      description:
        "Developed a responsive personal portfolio using React, HTML, CSS, JavaScript, and Bootstrap. Built reusable components and implemented mobile-first design.",
      tech: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Git"],
      link: "https://github.com/shubhangiazaddhuriya-alt/Portfolio.git",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing my best work and technical expertise
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
