import './Projects.css'

const projects = [
  {
    title: 'Project One',
    description:
      'A full-stack web app that does something useful. Describe the problem it solves and your role in building it.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    demo: '#',
    source: '#',
    color: 'var(--accent-1)',
  },
  {
    title: 'Project Two',
    description:
      'An open source tool with a growing community. Mention downloads, stars or users if you have them.',
    tags: ['TypeScript', 'CLI', 'OSS'],
    demo: '#',
    source: '#',
    color: 'var(--accent-2)',
  },
  {
    title: 'Project Three',
    description:
      'A fun side project experimenting with animations and creative coding on the canvas.',
    tags: ['JavaScript', 'Canvas', 'CSS'],
    demo: '#',
    source: '#',
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
            style={{ '--card-accent': p.color, transitionDelay: `${i * 0.12}s` }}
          >
            <div className="project-card__glow" />
            <div className="project-card__content">
              <div className="project-card__top">
                <span className="project-card__folder">▣</span>
                <div className="project-card__links">
                  <a href={p.source} aria-label="Source code" title="Source">
                    &lt;/&gt;
                  </a>
                  <a href={p.demo} aria-label="Live demo" title="Demo">
                    ↗
                  </a>
                </div>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
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
