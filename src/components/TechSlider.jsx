import { techStack } from '../data/skills'

export default function TechSlider() {
  const items = [...techStack, ...techStack]
  return (
    <div className="tech-slider">
      <div className="tech-track">
        {items.map((item, i) => (
          <span key={i}>{item} ★</span>
        ))}
      </div>
    </div>
  )
}
