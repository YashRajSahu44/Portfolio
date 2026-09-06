import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <h1 className="Main-head" id="project">Project</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div>
              <div className="project-card-top">
                <span className="project-tag">{project.tag}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-features">
                {project.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a href={project.code} className="proj-btn">View Code →</a>
              <a href={project.live} target="_blank" rel="noreferrer" className="proj-btn-live">Live Site ↗</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
