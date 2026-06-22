import '../styles/Education.css';

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Nagpur Institute of Technology",
      year: "2023 - 2027",
      percentage: "7.95 CGPA"
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      field: "PCMB (Physics, Chemistry, Mathematics,Biology)",
      institution: "Shivpiya Junior College",
      year: "2020 - 2022",
      percentage: "77%"
    },
    {
      id: 3,
      degree: "Secondary Education",
      field: "General Studies",
      institution: "Regent High School",
      year: "2020",
      percentage: "84%"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="timeline-marker"></div>
              <div className="card-content">
                <div className="card-header">
                  <h3>{edu.degree}</h3>
                  <span className="year">{edu.year}</span>
                </div>
                <p className="field">{edu.field}</p>
                <p className="institution">📍 {edu.institution}</p>
                <p className="percentage">⭐ {edu.percentage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
