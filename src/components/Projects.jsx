import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <h1 className="Main-head" id="project">Project</h1>

      <div className="project-feed">
        {projects.map((project) => (
          <div
            className="project-feature-card"
            key={project.id}
            style={{ background: project.gradient }}
          >
            <span className="project-feature-monogram" aria-hidden="true">{project.monogram}</span>
            <span className="project-feature-status">{project.status}</span>

            <div className="project-feature-body">
              <p className="project-feature-desc">{project.desc}</p>
              <div className="project-feature-features">
                {project.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <h3 className="project-feature-title">{project.title}</h3>
              <p className="project-feature-tag">{project.tag.toLowerCase()}</p>

              <div className="project-feature-links">
                <a href={project.code} className="project-feature-btn">View code →</a>
                <a href={project.live} target="_blank" rel="noreferrer" className="project-feature-btn project-feature-btn-solid">
                  Live site ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}