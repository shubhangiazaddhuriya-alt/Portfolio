import '../styles/Strengths.css';

export default function Strengths() {
  const strengths = [
    {
      icon: "🎯",
      title: "Attention to Detail",
      description: "I focus on every detail to ensure pixel-perfect designs and bug-free code."
    },
    {
      icon: "🚀",
      title: "Quick Learner",
      description: "I rapidly adapt to new technologies and frameworks to stay current with industry trends."
    },
    {
      icon: "💻",
      title: "Problem Solver",
      description: "I break down complex problems into manageable solutions with efficient code."
    },
    {
      icon: "🎨",
      title: "Creative Thinking",
      description: "I combine aesthetics with functionality to create unique and engaging user experiences."
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "I work effectively with designers, developers, and stakeholders to achieve project goals."
    },
    {
      icon: "⚡",
      title: "Work Ethic",
      description: "I'm committed to delivering quality work and consistently exceeding expectations."
    }
  ];

  return (
    <section id="strengths" className="strengths-section">
      <div className="container">
        <h2 className="section-title">My Strengths</h2>
        <p className="section-subtitle">What makes me a great developer and team member</p>
        
        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-card">
              <div className="strength-icon">{strength.icon}</div>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
