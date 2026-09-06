import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <>
      <h1 className="Main-head">Certifications</h1>

      <div className="cert-container">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <div className="cert-issuer">
              <span className={`cert-badge ${cert.badgeClass}`}>{cert.badge}</span>
              <div>
                <h4>{cert.title}</h4>
                <p className="cert-org">{cert.org}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            </div>
            <p className="cert-desc">{cert.desc}</p>
            <a href={cert.link} target="_blank" rel="noreferrer" className="cert-btn">
              Show Credential ↗
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
