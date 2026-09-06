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
          First-year B.Tech student at LNCT,Bhopal <br />trying to become a BetterHumanBeing
        </p>
      </div>
      <div className="btn-container">
        <a className="btn-primary" href="/CV/Resume.pdf">Download CV</a>
        <a className="btn-secondary" href="#contact">Contact</a>
      </div>
    </>
  )
}
