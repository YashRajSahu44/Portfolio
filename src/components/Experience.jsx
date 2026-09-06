import { experience } from '../data/experience'

export default function Experience() {
  return (
    <>
      <h1 className="Main-head">Experience</h1>

      <div className="exp-container">
        {experience.map((exp) => (
          <div className="exp-card" key={exp.id}>
            <div className="exp-left">
              <span className={`exp-badge ${exp.badgeClass}`}>{exp.badge}</span>
            </div>
            <div className="exp-right">
              <div className="exp-top">
                <h3>{exp.title}</h3>
                <span className="exp-type">{exp.type}</span>
              </div>
              <p className="exp-org">{exp.org}</p>
              <p className="exp-date">{exp.date}</p>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
