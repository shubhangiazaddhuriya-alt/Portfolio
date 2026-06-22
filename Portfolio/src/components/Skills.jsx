import "../styles/Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Tech",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript(ES6+)",
        "React",
        "Responsive Design",
        "API & Data Handling"
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git & GitHub",
        "Vite",
        "VS Code",
        "Chrome DevTools",
        "Netlify",
        "Vercel",
        "npm",
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Team Work",
        "Time Management",
        "Creativity",
        "Adaptability",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Crafting quality websites with cutting-edge technologies
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
