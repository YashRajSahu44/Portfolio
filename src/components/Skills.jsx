import { skills } from '../data/skills'

export default function Skills() {
  return (
    <>
      <h1 id="skills" className="Main-head">Skills</h1>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <img src={skill.icon} alt={skill.label} />
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
    </>
  )
}
