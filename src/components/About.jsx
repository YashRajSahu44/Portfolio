export default function About() {
  return (
    <>
      <h1 className="Main-head" id="about">About Me</h1>

      <div className="primary-head">
        <div className="about-wrapper">
          <div className="about-text">
            <p>
              Hi, I'm an 18-year-old engineering student, <span className="highlight">veteran in Minecraft</span> (10+ years of experience),
              and a curious mind deeply interested in <span className="highlight">backend and ML</span>. I love building cool
              frontends and responsive UI/UX.
            </p>
            <p>
              Outside of studying, I love watching <span className="highlight">anime</span>, playing{' '}
              <span className="highlight">video games</span>, listening to music, or maybe roaming down to some{' '}
              <span className="highlight">mountain</span> (yeah, I love mountains ). Currently balancing academics,
              programming, and in the meantime completing my bucket list of animes.
            </p>
            <p>
              I'm open to new <span className="highlight">roles, collaborations, and opportunities</span>. Feel free to reach out!
            </p>
          </div>
        </div>
      </div>

      <div className="collage">
        <img className="collage-icon" src="/Images/Lnct icon.png" alt="Collage Icon" />
        <div className="collage-text">
          <h3 className="collage-name">LAKSHMI NARAYAN COLLAGE OF TECHNOLOGY</h3>
          <p className="Branch">Btech in Artificial intelligence and Machine Learning</p>
        </div>
      </div>
    </>
  )
}
