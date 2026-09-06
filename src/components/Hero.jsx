export default function Hero() {
  return (
    <>
      <div className="into">
        <p className="Intro">Hello! I'm</p>
      </div>
      <h1 className="Hero">
        YASHRAJ <span className="surname">SAHU</span>
      </h1>
      <div style={{ textAlign: 'center' }}>
        <p className="intro">
     Building scalable frontend systems <br /> and modern web experiences <br /> with a strong focus on performance-focused engineering
        </p>
      </div>
      <div className="btn-container">
        <a className="btn-primary" href="/CV/Resume.pdf">Download CV</a>
        <a className="btn-secondary" href="#contact">Contact</a>
      </div>
    </>
  )
}
