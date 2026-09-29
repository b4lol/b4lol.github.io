import './Projects.css'

const projects = [
  {
    title: 'umbra',
    description:
      'Zero-trust, zero-metadata, post-quantum anonymous communication system. P2P over Tor v3, RAM-only, written in Rust.',
    tags: ['Rust', 'Tor', 'Post-Quantum', 'E2EE'],
    page: '/umbra/',
    source: 'https://github.com/b4lol/umbra',
    color: 'var(--accent-1-soft)',
  },
  {
    title: 'brim',
    description:
      'A modern, pure-Rust package manager and app store for Fedora and Debian — DNF5, APT, COPR and Flatpak under one GTK4 roof.',
    tags: ['Rust', 'GTK4', 'Libadwaita', 'Flatpak'],
    page: '/brim/',
    source: 'https://github.com/b4lol/brim',
    color: 'var(--accent-2)',
  },
  {
    title: 'B4Assistant',
    description:
      'Material 3 Expressive Quick Settings toolkit for rooted Android devices, built with Jetpack Compose.',
    tags: ['Android', 'Jetpack Compose', 'Magisk'],
    page: '/b4assistant/',
    source: 'https://github.com/b4lol/B4Assistant',
    color: 'var(--accent-3)',
  },
]
export default function Projects() {
  return (
    <section id="projects">
      <div className="reveal">
        <p className="section-label">// projects</p>
        <h2 className="section-title">
          Things I've <span className="gradient-text">built</span>
        </h2>
      </div>
      <div className="projects__grid">
        {projects.map((p, i) => (
          <article
            className="project-card reveal"
            key={p.title}
            style={{ '--card-accent': p.color, transitionDelay: `${(i % 3) * 0.12}s` }}
          >
            <div className="project-card__glow" />
            <div className="project-card__content">
              <div className="project-card__top">
                <span className="project-card__folder" aria-hidden="true">▣</span>
                <div className="project-card__links">
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} source code on GitHub`}
                    title="Source"
                  >
                    &lt;/&gt;
                  </a>
                  <a href={p.page} aria-label={`${p.title} project page`} title="Details">
                    ↗
                  </a>
                </div>
              </div>
              <h3 className="project-card__title">
                <a href={p.page}>{p.title}</a>
              </h3>
              <p className="project-card__description">{p.description}</p>
              <ul className="project-card__tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
