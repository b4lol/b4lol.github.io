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
            I'm a full-stack software developer with 7+ years of experience, working mainly with
            Rust. I enjoy building software close to the metal — package managers, privacy tools
            and low-level networking — as well as polished user-facing apps.
          </p>
          <p>
            My open source work ranges from <strong>umbra</strong>, a zero-trust, post-quantum
            anonymous communication system running P2P over Tor, to <strong>brim</strong> and{' '}
            <strong>shelly-fedora</strong>, modern package managers for Fedora and Debian. I also
            build Android tooling and design bare-metal security challenges.
          </p>
          <p>
            When I'm not coding, I'm usually tinkering with my Linux setup, exploring new protocols
            or contributing to the open source ecosystem.
          </p>
        </div>
        <div className="about__stats reveal">
          <div className="stat-card">
            <span className="stat-card__number gradient-text">7+</span>
            <span className="stat-card__label">Years of experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__number gradient-text">9+</span>
            <span className="stat-card__label">Public open source projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__number gradient-text">5+</span>
            <span className="stat-card__label">Programming languages</span>
          </div>
        </div>
      </div>
    </section>
  )
}
