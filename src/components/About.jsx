import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="reveal">
        <p className="section-label">// about me</p>
        <h2 className="section-title">
          A bit <span className="gradient-text">about me</span>
        </h2>
      </div>
      <div className="about__grid">
        <div className="about__text reveal">
          <p>
            I'm a software developer who enjoys turning ideas into working products. My journey
            started with curiosity about how the web works, and it grew into a passion for building
            clean, performant applications.
          </p>
          <p>
            These days I spend most of my time writing JavaScript and TypeScript, contributing to
            open source, and exploring new tools that make developers' lives easier.
          </p>
          <p>When I'm not coding, you'll find me reading tech blogs, gaming or hiking.</p>
        </div>
        <div className="about__stats reveal">
          <div className="stat-card">
            <span className="stat-card__number gradient-text">3+</span>
            <span className="stat-card__label">Years of experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__number gradient-text">20+</span>
            <span className="stat-card__label">Projects completed</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__number gradient-text">10+</span>
            <span className="stat-card__label">Open source contributions</span>
          </div>
        </div>
      </div>
    </section>
  )
}
